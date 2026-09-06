# baseball.computer site

Svelte 5 / SvelteKit site deployed on Vercel. All SQL executes in the browser through DuckDB-WASM and a public DuckLake 1.0 on Cloudflare R2.

- `src/lib/io/data-source.ts` — versioned catalog and schema endpoints.
- `src/lib/io/db.ts` — read-only DuckLake attachment (`bc_remote`) and writable local-file database.
- `docs/development.md` — architecture, conventions, and known issues.
- `docs/ducklake-production.md` — publication, verification, and rollback.

Use the pinned pnpm version in `package.json`. Required checks: `pnpm check`, `pnpm lint`, `pnpm test`. `pnpm test:integration` builds and previews the app, then runs real browser queries against the published DuckLake.

Keep the browser execution model, Svelte 5 runes, strict TypeScript, and existing query/download/local-file behavior.
