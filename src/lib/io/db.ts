import type { RecordBatch } from "apache-arrow";
import type { AsyncDuckDB, AsyncDuckDBConnection } from "@duckdb/duckdb-wasm";
import * as duckdb from "@duckdb/duckdb-wasm";
import { dev } from "$app/environment";

import duckDBWorker from "@duckdb/duckdb-wasm/dist/duckdb-browser-mvp.worker.js?url";
import duckDBWasm from "@duckdb/duckdb-wasm/dist/duckdb-mvp.wasm?url";
import duckDBWorkerEh from "@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js?url";
import duckDBWasmEh from "@duckdb/duckdb-wasm/dist/duckdb-eh.wasm?url";
// COI bundle blocked on https://github.com/duckdb/duckdb-wasm/issues/939

const MANUAL_BUNDLES: duckdb.DuckDBBundles = {
  mvp: {
    mainModule: duckDBWasm,
    mainWorker: duckDBWorker,
  },
  eh: {
    mainModule: duckDBWasmEh,
    mainWorker: duckDBWorkerEh,
  },
};

const getDB = async (): Promise<AsyncDuckDB> => {
  const bundle = await duckdb.selectBundle(MANUAL_BUNDLES);
  const logger = new duckdb.ConsoleLogger(duckdb.LogLevel.INFO);
  const worker = new Worker(String(bundle.mainWorker));
  const db = new duckdb.AsyncDuckDB(logger, worker);
  await db.instantiate(bundle.mainModule);
  return db;
};

class DbContextManager {
  conn: AsyncDuckDBConnection;
  private db: AsyncDuckDB;

  private constructor(db: AsyncDuckDB, conn: AsyncDuckDBConnection) {
    this.db = db;
    this.conn = conn;
  }

  static async init(): Promise<DbContextManager> {
    const db = await getDB();

    const conn = await db.connect();
    await conn.query(
      `ATTACH 'https://data.baseball.computer/dbt/bc_remote.db' (READ_ONLY, TYPE DUCKDB)`
    );
    // Writable in-memory database for local file registration. The
    // remote attach is read-only so any CREATE VIEW for an uploaded
    // CSV/Parquet must land here.
    await conn.query(`ATTACH ':memory:' AS local`);
    await conn.query(`USE bc_remote`);
    await conn.query(`SET SCHEMA=main_models`);

    if (dev) console.debug("DB is ready for queries.");
    return new DbContextManager(db, conn);
  }

  async close() {
    await this.conn.query(`DETACH bc_remote`);
    await this.conn.query(`DETACH local`);
    await this.conn.close();
    await this.db.terminate();
  }

  async *getBatches(
    query: string
  ): AsyncGenerator<{ batch: RecordBatch; done: boolean }> {
    const reader = await this.conn.send(query);
    let iter = await reader.next();
    while (!iter.done) {
      const batch = iter.value;
      iter = await reader.next();
      yield { batch: batch, done: Boolean(iter.done) };
    }
  }

  async explain(query: string, analyze = false): Promise<string> {
    const sql = `EXPLAIN ${analyze ? "ANALYZE " : ""}${query}`;
    const reader = await this.conn.query(sql);
    // DuckDB EXPLAIN returns columns (explain_key, explain_value).
    // The plan tree is the explain_value cells joined by newline.
    const rows = reader.toArray() as Array<{ explain_value?: unknown }>;
    return rows
      .map((r) => (typeof r.explain_value === "string" ? r.explain_value : ""))
      .join("\n");
  }

  async registerFile(
    file: File,
    tableName: string
  ): Promise<{ columns: Array<string> }> {
    const buf = new Uint8Array(await file.arrayBuffer());
    await this.db.registerFileBuffer(file.name, buf);
    // DuckDB-WASM auto-detects csv/parquet by filename extension when
    // the path is referenced as a string literal in SELECT FROM '...'.
    const escapedFile = file.name.replace(/'/g, "''");
    const escapedTable = tableName.replace(/"/g, '""');
    try {
      await this.conn.query(
        `CREATE OR REPLACE VIEW local.main."${escapedTable}" AS SELECT * FROM '${escapedFile}'`
      );
      const reader = await this.conn.query(
        `DESCRIBE local.main."${escapedTable}"`
      );
      const rows = reader.toArray() as Array<{ column_name?: unknown }>;
      const columns = rows
        .map((r) => (typeof r.column_name === "string" ? r.column_name : ""))
        .filter(Boolean);
      return { columns };
    } catch (err) {
      // CREATE VIEW or DESCRIBE failed (malformed file, parse error).
      // The file buffer is still in the worker vfs — drop it to avoid
      // leaking bytes per failed attempt. Best-effort: any failure
      // here is secondary to the original error we re-throw.
      try {
        await this.db.dropFile(file.name);
      } catch {
        // ignore
      }
      throw err;
    }
  }

  async unregisterFile(filename: string, tableName: string): Promise<void> {
    const escapedTable = tableName.replace(/"/g, '""');
    try {
      await this.conn.query(`DROP VIEW IF EXISTS local.main."${escapedTable}"`);
    } catch {
      // view may already be gone; continue to drop the file
    }
    try {
      await this.db.dropFile(filename);
    } catch {
      // file may already be gone; ignore
    }
  }

  async copyToBuffer(
    query: string,
    format: "csv" | "parquet"
  ): Promise<Uint8Array> {
    const path = `result.${format}`;
    const fmt = format === "csv" ? "CSV, HEADER" : "PARQUET";
    try {
      await this.db.dropFile(path);
    } catch {
      // file may not exist; ignore
    }
    await this.conn.query(`COPY (${query}) TO '${path}' (FORMAT ${fmt})`);
    return await this.db.copyFileToBuffer(path);
  }
}

export { DbContextManager };
