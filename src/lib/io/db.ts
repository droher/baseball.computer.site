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
    await conn.query(`USE bc_remote`);
    await conn.query(`SET SCHEMA=main_models`);

    if (dev) console.debug("DB is ready for queries.");
    return new DbContextManager(db, conn);
  }

  async close() {
    await this.conn.query(`DETACH bc_remote`);
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
