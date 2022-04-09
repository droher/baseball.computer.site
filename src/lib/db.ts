import type { Table } from 'apache-arrow';
import type { AsyncDuckDB, AsyncDuckDBConnection } from '@duckdb/duckdb-wasm';

import * as duckdb from '@duckdb/duckdb-wasm';

import duckDBWorker from '/shim/duckdb/duckdb-browser-mvp.worker?url';
import duckDBWasm from '/shim/duckdb/duckdb-mvp.wasm?url';
import duckDBWorkerEh from '/shim/duckdb/duckdb-browser-eh.worker?url';
import duckDBWasmEh from '/shim/duckdb/duckdb-eh.wasm?url';
import duckDBWorkerCoi from '/shim/duckdb/duckdb-browser-coi.worker?url';
import duckDBWasmCoi from '/shim/duckdb/duckdb-coi.wasm?url';
import duckDBThreadWorkerCoi from '/shim/duckdb/duckdb-browser-coi.pthread.worker?url';

const MANUAL_BUNDLES: duckdb.DuckDBBundles = {
	mvp: {
		mainModule: duckDBWasm,
		mainWorker: duckDBWorker
	},
	eh: {
		mainModule: duckDBWasmEh,
		mainWorker: duckDBWorkerEh
	},
	coi: {
		mainModule: duckDBWasmCoi,
		mainWorker: duckDBWorkerCoi,
		pthreadWorker: duckDBThreadWorkerCoi
	}
};

const getDB = async (): Promise<AsyncDuckDB> => {
	const bundle = await duckdb.selectBundle(MANUAL_BUNDLES);
	console.log('Using DuckDB bundle: ', bundle);
	const logger = new duckdb.ConsoleLogger();
	const worker = new Worker(bundle.mainWorker);
	const db = new duckdb.AsyncDuckDB(logger, worker);
	await db.instantiate(bundle.mainModule);

	return db;
};

const addViewDDL = (table: RemoteParquetFile): string => {
	return `
    CREATE VIEW ${table.table_name} AS (
        SELECT * 
        FROM '${table.base_url}/${table.table_name}.parquet'
    );`;
};

const getTableFields = (table: Table<any>): Array<string> => {
	return table.schema.fields.map((f) => f.name);
};

type RemoteParquetFile = {
	base_url: string;
	table_name: string;
};

class DbContextManager {
    conn: AsyncDuckDBConnection;
	private db: AsyncDuckDB;

	private constructor(db, conn) {
		this.db = db;
		this.conn = conn;
	}

	static async init(views: RemoteParquetFile[] = []): Promise<DbContextManager> {
        console.log("Initializing DB...")
		const db = await getDB();
		const conn = await db.connect();
        
        console.log("Registering views...")
		const exec = views.map((t) => conn.query(addViewDDL(t)))
        await Promise.all(exec);

        console.log("DB is ready for queries.")
		return new DbContextManager(db, conn);
	}

    async close() {
        await this.conn.close();
        await this.db.terminate();
    }
}

export { DbContextManager, getTableFields }; 
export type { RemoteParquetFile };

