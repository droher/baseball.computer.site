# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

Last refresh: 2026-04-30 — coordinated upgrade pass on branch `upgrade-packages` brought the framework stack current (Svelte 5 runes, SvelteKit 2.58, Tailwind v4 + daisyUI v5, Vite 6, Vitest 4, Perspective v3, `@duckdb/duckdb-wasm@1.33`, `apache-arrow@21`). Vercel adapter switched from edge to `nodejs22.x`. The `/query-engine` page works end-to-end against simple SQL; queries that touch the upstream parquet partitions on `data.baseball.computer/dbt/*.parquet` currently fail with CORS — that is an R2 bucket config issue on the data side, out of scope for this repo.

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
- On `init()`: `ATTACH 'https://data.baseball.computer/dbt/bc_remote.db' (READ_ONLY, TYPE DUCKDB); USE bc_remote; SET SCHEMA=main_models`. The remote `.duckdb` file references Parquet partitions; DuckDB-WASM streams what it needs over HTTP range requests.
- `getBatches(query)` is an `AsyncGenerator<RecordBatch>` — results are streamed, not buffered, so the UI can render incrementally.

`src/lib/stores.ts` — `db` writable store lazy-initializes the `DbContextManager` on first subscribe (browser-only via `$app/environment`). `queryStatus` enum (`Idle | Ready | Running | Success | Failure`) drives the query lifecycle. Stores accessed via `$store` syntax continue to work alongside Svelte 5 runes.

### Query engine page (`/query-engine`)

`+page.ts` (prerendered) fetches `https://data.baseball.computer/dbt/catalog.json` at build time and flattens it into a `{ "schema.table": [columns] }` map passed to `QueryInput` for autocomplete.

`+page.svelte` URL-encodes query text as `?query=<base64>` (via `btoa`/`atob`) so queries are shareable. `onMount` warms the DB connection by subscribing to `db`. Setting `queryStatus = Ready` triggers the `$effect` block in `DataAnalysis.svelte`.

`DataAnalysis.svelte` consumes the batch generator from `db.getBatches(query)`, converts each batch to Apache Arrow IPC, and feeds a `@finos/perspective` Client (created via `perspective.worker()`) → `<perspective-viewer>` for tabular/chart rendering. Perspective v3 requires explicit wasm bootstrap: `perspective.init_server(fetch(SERVER_WASM))` and `perspective_viewer.init_client(fetch(CLIENT_WASM))` before `perspective.worker()`. WASM URLs come from `?url` imports of `@finos/perspective/dist/wasm/perspective-server.wasm` and `@finos/perspective-viewer/dist/wasm/perspective-viewer.wasm`. **Known bug** flagged in code: `BUFFER_LENGTH > 1` causes spurious ints in null int columns — leave it at 1 unless the upstream issue is fixed.

The component also patches `navigator.languages` if it is empty or contains the literal string `"undefined"` (a Playwright-headless quirk) — perspective's wasm feeds the array directly into `Intl.NumberFormat`, which throws on bogus tags.

`Rube.svelte` is an easter egg: triggers when the query text contains `rube`/`waddell`/`waddr101` and `queryStatus === Running`. Uses Svelte 5's `Tween` (`svelte/motion`) for the animation.

### Other routes

- `/` landing page, `/+layout.ts` injects `@vercel/analytics`.
- `/blog` uses **mdsvex** — `.svelte.md` / `.md` / `.svx` posts in `src/posts/`. Posts are loaded via `src/lib/blog/util` (`getPublishedPosts`) and the page is prerendered.

### Deployment

`@sveltejs/adapter-vercel` with `runtime: "nodejs22.x"` (the `edge` runtime was deprecated in adapter-vercel 5.x). Static assets and the prerendered routes (`/blog`, `/query-engine`) are served from Vercel's CDN; query execution happens entirely in the user's browser, so the serverless function is mostly a static shell.

## Conventions / gotchas

- **Svelte 5 runes are enabled globally** via `compilerOptions.runes: true` in `svelte.config.js`. All components must use `$props()`, `$state()`, `$derived()`, `$effect()`, and property-style event handlers (`onclick={...}`, not `on:click={...}`). `<slot />` is replaced by `{@render children()}`.
- Path alias `$lib` → `src/lib` (SvelteKit default).
- Two-space indentation, double quotes, semicolons (`.prettierrc`). `eslint-config-prettier` disables stylistic conflicts.
- Tailwind v4 + daisyUI v5 are configured **CSS-first** in `src/app.css` via `@import "tailwindcss"; @plugin "@tailwindcss/forms"; @plugin "@tailwindcss/typography"; @plugin "daisyui" { themes: light --default; }`. There is no `tailwind.config.cjs` or `postcss.config.cjs` anymore. Tailwind is wired into Vite via `@tailwindcss/vite` in `vite.config.ts`.
- `src/global.css` uses `@reference "./app.css"` so `@apply` can resolve Tailwind utilities — required by Tailwind v4 in shared CSS modules.
- Don't import DuckDB-WASM workers/wasm without the `?url` suffix — Vite needs it for asset URL resolution (see `db.ts` imports). Same applies to perspective's wasm files.
- The Perspective viewer must be dynamically imported in `onMount` (it touches `window`/`HTMLElement`) — keep the `await import(...)` pattern in `DataAnalysis.svelte` rather than top-level imports.
- `vite.config.ts` sets `build.target: "esnext"`, `worker.format: "es"`, and `optimizeDeps.esbuildOptions.target: "esnext"` — required because DuckDB-WASM and Perspective use top-level await.
- Apache Arrow `Table` / `RecordBatch` types come from `apache-arrow` (v21). The `pnpm.overrides` block in `package.json` pins arrow to 21 across the dep graph so duckdb-wasm's transitive arrow 17 doesn't conflict.
- ESLint 9 flat config in `eslint.config.js`. `svelte/no-navigation-without-resolve` is disabled — internal hrefs are static literals and don't need the `resolve()` helper here.

## Known issues / follow-ups

Caught during the 2026-04-30 upgrade pass; tracked here so we don't lose them:

1. **CORS on parquet partitions** — `https://data.baseball.computer/dbt/*.parquet` does not return `Access-Control-Allow-Origin`, so any query that touches a partition (anything beyond `SELECT 1` / catalog metadata) fails in the browser with a CORS error. The catalog.json and `bc_remote.db` HEAD/range requests appear to work, but parquet GETs are blocked. Fix on the data side: set CORS rules on the R2 bucket that serves `data.baseball.computer/dbt/`. Until then, the `/query-engine` page only works for queries that don't materialize parquet rows.
2. **Headless Firefox `navigator.languages = ["undefined"]`** — Playwright Firefox returns this string literal for `navigator.language(s)`, which perspective's wasm forwards verbatim to `Intl.NumberFormat` and crashes ("invalid language tag: 'undefined'"). `DataAnalysis.svelte` defensively filters and overrides on init. Real browsers don't hit this, but if the guard is ever moved or the test matrix expands, keep an eye on it.
3. **`BUFFER_LENGTH > 1` in `DataAnalysis.svelte`** — pre-existing TODO carried forward. Buffering more than one Arrow `RecordBatch` per perspective `update()` produces spurious integers in null int columns. Likely an upstream perspective or arrow encoding bug; revisit when bumping either.
4. **mdsvex `context="module"` deprecation** — mdsvex 0.12.7 emits `<script context="module">` rather than the new Svelte 5 `module` attribute, producing a build-time warning per post. Cosmetic only; will resolve when mdsvex ships a Svelte-5-aware release.
5. **Vercel adapter still warns about `memory` option** if you re-add it — current config drops the explicit `memory: 128` since the edge runtime is gone; the default for `nodejs22.x` is fine.
6. **`apache-arrow` override risk** — `pnpm.overrides` forces arrow 21 across the dep graph, including duckdb-wasm 1.33 which declares `^17.0.0`. The IPC wire format is stable across these majors and the `SELECT 1` round-trip works in browser, but there is no integration test exercising a real query (CORS blocks it from headless tests too). If duckdb-wasm starts emitting arrow shapes that the bumped runtime rejects, drop the override and pin everything to 17.
