# DuckLake production queries

The site attaches `ducklake:https://data.baseball.computer/baseball/v1/baseball.ducklake` read-only as `bc_remote`. The catalog stores the HTTPS path of its Parquet files. `catalog.json` beside it supplies the schema sidebar and SQL completion at build time. Both are produced by `scripts/upload_ducklake.py` in the database repository.

Publication order is immutable Parquet files, schema metadata, then the catalog. Never remove data files referenced by a catalog still used by open browser sessions. After a schema change, rebuild the site so its prerendered sidebar matches the catalog. Keep `src/lib/io/data-source.ts` aligned with the database repository's `bc/data_version.txt` when advancing the data version.

DuckDB-WASM is pinned to a build that supports DuckLake 1.0. Test upgrades with a real DuckLake query; successful `SELECT 1` alone does not prove data access. The browser tests verify the attachment type, real-data results, downloads, schema completion, history, and local uploads in Chromium, Firefox, and WebKit. Network assertions additionally prove Parquet reads and absence of legacy requests in Chromium and WebKit; Playwright does not expose the Firefox worker requests. A staged catalog redirect via `PLAYWRIGHT_DUCKLAKE_CATALOG_URL` is supported for Chromium/WebKit validation; final deployed checks must omit that override. `PLAYWRIGHT_BASE_URL=https://baseball.computer pnpm test:integration` tests the deployed site without starting a local server.

The `bc_remote` alias and `main_models` default schema preserve existing shared SQL. DuckLake publishes ENUM columns as VARCHAR; labels are preserved. Downloads and local joins continue to run entirely in the browser.

If a release fails live checks, restore the preceding Vercel production deployment. The old `/dbt/` artifacts are retained for existing external consumers and rollback; this site no longer queries them. Reverting a data release requires a matching catalog and its immutable files, not changing only the frontend URL.
