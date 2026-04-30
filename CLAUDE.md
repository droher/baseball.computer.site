# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

Last refresh: 2026-04-30 — query-engine UX bundle landed on `query-engine-ux-bundle`: schema browser sidebar, localStorage-backed Recent queries, EXPLAIN viewer (plain + ANALYZE), and local CSV/Parquet upload via `db.registerFileBuffer` + a writable `local` in-memory database (`ATTACH ':memory:' AS local`) so user files materialize as `local.<table>` views joinable against `bc_remote`. Editor exposes its CodeMirror `EditorView` via an `onReady` prop, with the SQL extension wrapped in a `Compartment` so the schema can reconfigure as files come and go. Class-based reactive state in `src/lib/state/*.svelte.ts` wired via `createContext`. CSV/Parquet download is `COPY ... TO` + `copyFileToBuffer`. Theme follows `prefers-color-scheme`. RSS + sitemap routes prerendered. Custom Vercel analytics events fire from query lifecycle (now `explain_run`, `local_file_registered` too). Tests cover the golden path plus all four UX features. Upstream CORS on `data.baseball.computer/dbt/*.parquet` is still the gating issue for any query that materializes parquet rows.

## Commands

Package manager: **pnpm** (`pnpm-lock.yaml` present). `npm run` works too.

```bash
pnpm dev              # vite dev server
pnpm build            # production build (Vercel nodejs22.x adapter)
pnpm preview          # preview production build on :4173
pnpm check            # svelte-kit sync && svelte-check (typecheck)
pnpm lint             # prettier --check + eslint (ESLint 9 flat config)
pnpm format           # prettier --write
pnpm test:unit        # vitest run, picks up src/**/*.{test,spec}.{js,ts}
pnpm test:integration # playwright; auto-runs `build && preview` first
pnpm test             # both, integration then unit
```

Run a single vitest file: `pnpm vitest run src/path/to/file.test.ts`.
Run a single playwright test: `pnpm playwright test tests/test.ts -g "<name>"`.

Treat `pnpm check && pnpm lint && pnpm test` as the green-build gate before declaring work done. `tsconfig.json` has `strict: true`.

## Architecture

### Client-side query execution (the core architectural choice)

Zero server-side query execution. All SQL runs in the browser via DuckDB-WASM against a remote DuckDB database hosted on Cloudflare R2.

`src/lib/io/db.ts` — `DbContextManager`:
- Loads one of two DuckDB-WASM bundles (`mvp` or `eh`) via `duckdb.selectBundle`. The COI/pthread bundle is commented out pending [duckdb-wasm#939](https://github.com/duckdb/duckdb-wasm/issues/939); enabling it would unlock threading.
- On `init()`: `ATTACH 'https://data.baseball.computer/dbt/bc_remote.db' (READ_ONLY, TYPE DUCKDB); ATTACH ':memory:' AS local; USE bc_remote; SET SCHEMA=main_models`. The remote `.duckdb` file references Parquet partitions; DuckDB-WASM streams what it needs over HTTP range requests. The `local` in-memory database is the writable target for user-uploaded files (read-only `bc_remote` rejects `CREATE VIEW`).
- `getBatches(query)` is an `AsyncGenerator<RecordBatch>` — results are streamed, not buffered, so the UI can render incrementally.
- `copyToBuffer(query, format)` runs `COPY (<query>) TO 'result.<ext>' (FORMAT <fmt>)` against the worker's virtual fs and returns the bytes via `db.copyFileToBuffer`. Used by the CSV/Parquet download path.
- `explain(query, analyze)` runs `EXPLAIN [ANALYZE] <query>` and returns the joined `explain_value` rows. Bypasses `beforeQuery/querySucceeded` so it doesn't pollute history or telemetry; emits its own `explain_run` event.
- `registerFile(file, tableName)` calls `db.registerFileBuffer` with the file bytes then `CREATE OR REPLACE VIEW local.main."<table>" AS SELECT * FROM '<filename>'` (DuckDB-WASM auto-detects CSV/Parquet by extension). `unregisterFile(filename, tableName)` is the inverse.

### Reactive state (`src/lib/state/*.svelte.ts`)

Four classes; `DbState`, `PerspectiveState`, and `HistoryState` are constructed once in `+layout.svelte` and shared via `createContext`. `SchemaState` is constructed in `/query-engine`'s `+page.svelte` (it seeds from prerendered page data) and shared with descendants via the same pattern.

- `DbState` — wraps `DbContextManager`. `$state`-backed `status` (`QueryStatus.Idle | Running | Success | Failure`), `error`, `manager`. `init()` is idempotent (single internal `initPromise` resolves all concurrent callers). Lifecycle helpers `beforeQuery() / querySucceeded(start, rows) / queryFailed(start, err) / queryCancelled(start)` flip `status`/`error` and emit Vercel analytics events. `explain(query, analyze)` delegates to the manager.
- `PerspectiveState` — owns the perspective `Client` singleton. `getClient()` is idempotent, dynamically imports `@finos/perspective`, `@finos/perspective-viewer`, the d3fc + datagrid plugins, awaits `init_client(fetch(CLIENT_WASM))` (must be awaited so the `<perspective-viewer>` custom element is registered before `perspective.worker()` reads `__wasm_module__`), then calls `perspective.worker()`.
- `HistoryState` — `$state`-backed array of `{ id, query, timestamp, status, ms?, rows?, error? }`. Persisted to `localStorage` under `bc.queryHistory.v1`, capped at 50 entries (FIFO truncation). `start(query)` appends a `running` entry and returns its id; `finalize(id, patch)` updates a single entry. Stale `running` entries (page reload mid-query) are coerced to `cancelled` on load. Malformed payloads reset silently.
- `SchemaState` — `$state`-backed `tables: Record<"schema.table", string[]>`. Seeded from prerendered `data.schema`. `addTable` / `removeTable` are how `LocalFiles` extends the schema for newly-registered files; the `bySchema` getter is what the sidebar tree reads. `uniqueTableName(filename)` derives a SQL-safe identifier with collision suffixing.

Consumers call `getDbState()` / `getPerspectiveState()` / `getHistoryState()` / `getSchemaState()` (typed accessors returned by `createContext`).

### Query engine page (`/query-engine`)

`+page.ts` (prerendered) fetches `https://data.baseball.computer/dbt/catalog.json` at build time and flattens it into a `{ "schema.table": [columns] }` map. The map seeds a `SchemaState` instance in the page; `QueryInput` reads `schemaState.tables` for autocomplete and the sidebar tree reads `schemaState.bySchema`.

`+page.svelte`:
- Layout: a two-column CSS grid (`md:grid-cols-[16rem_1fr]`) — sidebar (`SchemaBrowser` + `LocalFiles`) on the left, editor + buttons + `ExplainViewer` + `DataAnalysis` on the right. On `<md` the sidebar collapses; a hamburger button (`☰`) opens it as a fixed-positioned drawer.
- Encodes/decodes the shareable `?query=<base64>` URL param via `src/lib/util/query-url.ts` (`encodeQuery` / `decodeQuery`). Initial decode is gated on `browser` because the route is prerendered (`url.searchParams` is forbidden during SSR-prerender).
- `handleQuery` is the explicit Analyze event handler — calls into `DataAnalysis`'s `run` function, which the component registered via the `onReady` callback prop on mount.
- `handleDownload` calls `downloadResult(dbState, query, format)` from `src/lib/util/download.ts` (runs `COPY` and triggers a Blob download via temporary `<a>`). Buttons mutually exclude (Analyze disabled while downloading, vice versa) — both the perspective stream and the COPY share one DuckDB connection.
- History wiring: `DataAnalysis` calls back into the page via `onStart(query)` (start of every run, including the auto-run from `?query=`) and `onRows(n)` (after a successful stream completes). `onStart` calls `historyState.start(query)`, capturing the entry id and run timestamp; a `$effect` watching `dbState.status` calls `historyState.finalize` once the status leaves `Running`. This keeps `DbState` ignorant of history.

`QueryInput.svelte`:
- Wraps the `sql({ schema })` extension in a CodeMirror `Compartment` so the schema can reconfigure at runtime when local files are added/removed. The initial extensions array is captured once at script init via `untrack` so prop changes don't churn the whole editor state.
- Exposes the `EditorView` via `onReady(view)` so `SchemaBrowser` (insert at cursor) and `QueryHistory` (replace whole doc on Load) can dispatch text changes directly.

`DataAnalysis.svelte`:
- Uses `{@attach attachViewer}` on `<perspective-viewer>`. The attachment captures the node ref and returns a teardown that calls `node.delete()` and `pTable.delete()` (perspective `Table::delete` is a separate lifecycle from the viewer element).
- `run(query)` is exposed via `onReady`. Cancellation is via a monotonic `runToken`; a stale run that loses the token disposes its in-flight `pTable` and emits `queryCancelled` for telemetry symmetry.
- Calls `onStart(query)` and `onRows(rows)` callbacks if provided; the page wires these into `HistoryState`.
- **Known bug** flagged in code: `BUFFER_LENGTH > 1` causes spurious ints in null int columns — leave it at 1 unless the upstream issue is fixed.
- Patches `navigator.languages` if it is empty or contains the literal string `"undefined"` (Playwright-headless quirk).

`SchemaBrowser.svelte` / `QueryHistory.svelte` / `ExplainViewer.svelte` / `LocalFiles.svelte`:
- All four are thin presentational components that consume the relevant `*.svelte.ts` state class and (for the editor-affecting ones) the `EditorView` passed down from `+page.svelte`.
- `LocalFiles` accepts CSV / Parquet via either `<input type="file">` or a drag-and-drop zone (hidden under `md:`). Files persist only in worker memory — cleared on reload. Toast surfaces this on first registration.
- `ExplainViewer` runs `EXPLAIN` or `EXPLAIN ANALYZE` and renders the plan in a `<pre>`. Has a "may be slow" hint next to the ANALYZE button since that variant actually executes the query.

`Rube.svelte` is an easter egg: triggers when the query text contains `rube`/`waddell`/`waddr101` and `dbState.status === Running`. Uses Svelte 5's `Tween` (`svelte/motion`).

### Theme

`src/app.html` has an inline pre-paint script that sets `data-theme` on `<html>` from `localStorage.theme` ?? `matchMedia('(prefers-color-scheme: dark)')`, and live-updates on OS preference changes when the user hasn't explicitly chosen. daisyUI is configured in `src/app.css` with `themes: light --default, dark --prefersdark;`.

### Other routes

- `/` landing page warms the DB (`dbState.init()` in `onMount`) and runtime-injects `<link rel="prefetch">` for the duckdb-eh wasm + worker so first-query latency on `/query-engine` benefits.
- `/blog` uses **mdsvex** — `.svelte.md` / `.md` / `.svx` posts in `src/posts/`. Posts are loaded via `src/lib/blog/util` (`getPublishedPosts` → `processModules`, the latter pure for testability) and the page is prerendered.
- `/rss.xml/+server.ts` and `/sitemap.xml/+server.ts` — both prerendered. URLs use the canonical origin via `kit.prerender.origin = "https://baseball.computer"` in `svelte.config.js` (without that, prerender uses `http://sveltekit-prerender`).

### Telemetry

`src/lib/telemetry.ts` is a thin wrapper over `@vercel/analytics`'s `track`. Gated on `!dev`; swallows errors. Events: `query_started`, `query_succeeded` (`{ ms, rows }`), `query_failed` (`{ ms, error_class }`), `query_cancelled` (`{ ms }`), `explain_run` (`{ analyze }`), `local_file_registered` (`{ extension }`). Raw query text is intentionally never sent — it's already shareable via the URL.

### Deployment

`@sveltejs/adapter-vercel` with `runtime: "nodejs22.x"`. Static assets and prerendered routes (`/blog`, `/query-engine`, `/rss.xml`, `/sitemap.xml`) are served from Vercel's CDN; query execution happens entirely in the user's browser.

`vercel.json` sets `Cache-Control: public, max-age=31536000, immutable` on `/_app/immutable/*`. `vite.config.ts` `build.rollupOptions.output.manualChunks` splits duckdb-wasm, perspective, apache-arrow, and codemirror+lezer into their own chunks so they cache independently from app code.

## Conventions / gotchas

- **Svelte 5 runes are enabled globally** via `compilerOptions.runes: true` in `svelte.config.js`. All components must use `$props()`, `$state()`, `$derived()`, `$effect()`, and property-style event handlers (`onclick={...}`, not `on:click={...}`). `<slot />` is replaced by `{@render children()}`.
- Path alias `$lib` → `src/lib` (SvelteKit default).
- Two-space indentation, double quotes, semicolons (`.prettierrc`). `eslint-config-prettier` disables stylistic conflicts.
- Tailwind v4 + daisyUI v5 are configured **CSS-first** in `src/app.css`. Tailwind is wired into Vite via `@tailwindcss/vite` in `vite.config.ts`.
- `src/global.css` uses `@reference "./app.css"` so `@apply` can resolve Tailwind utilities — required by Tailwind v4 in shared CSS modules.
- Don't import DuckDB-WASM workers/wasm without the `?url` suffix — Vite needs it for asset URL resolution. Same for perspective's wasm files.
- The Perspective viewer must be dynamically imported (it touches `window`/`HTMLElement`) — keep the `await import(...)` pattern in `PerspectiveState.getClient`.
- `vite.config.ts` sets `build.target: "esnext"`, `worker.format: "es"`, and `optimizeDeps.esbuildOptions.target: "esnext"` — required because DuckDB-WASM and Perspective use top-level await.
- Apache Arrow types come from `apache-arrow` (v21). The `pnpm.overrides` block in `package.json` pins arrow to 21 across the dep graph so duckdb-wasm's transitive arrow 17 doesn't conflict.
- ESLint 9 flat config. `svelte/no-navigation-without-resolve` is disabled — internal hrefs are static literals.
- Prerendered routes that need `url.searchParams` must guard with `browser` from `$app/environment` (init-time access throws during SSR-prerender).

## Known issues / follow-ups

1. **CORS on parquet partitions** — `data.baseball.computer/dbt/*.parquet` does not return `Access-Control-Allow-Origin`; queries that materialize parquet rows fail in-browser. The `bc_remote.db` HEAD/range and catalog.json work. Fix is on the data-side R2 bucket. Until then `/query-engine` is limited to queries that don't touch partitions (e.g. `SELECT 1`).
2. **Headless Firefox `navigator.languages = ["undefined"]`** — `DataAnalysis.svelte` defensively filters and overrides on init.
3. **`BUFFER_LENGTH > 1` in `DataAnalysis.svelte`** — Buffering more than one Arrow `RecordBatch` per perspective `update()` produces spurious integers in null int columns. Likely an upstream perspective/arrow encoding bug.
4. **mdsvex `context="module"` deprecation** — mdsvex 0.12.7 emits the legacy syntax. Cosmetic warning per post.
5. **`apache-arrow` override risk** — `pnpm.overrides` forces arrow 21 across the dep graph including duckdb-wasm 1.33's `^17.0.0`. Drop the override and pin to 17 if duckdb-wasm starts emitting incompatible arrow shapes.
