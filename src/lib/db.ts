import type { Table } from 'apache-arrow';
import type { AsyncDuckDB, AsyncDuckDBConnection } from '@duckdb/duckdb-wasm';

import * as duckdb from '@duckdb/duckdb-wasm';

import duckDBWorker from '@duckdb/duckdb-wasm/dist/duckdb-browser-mvp.worker.js?url';
import duckDBWasm from '@duckdb/duckdb-wasm/dist/duckdb-mvp.wasm?url';
import duckDBWorkerEh from '@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js?url';
import duckDBWasmEh from '@duckdb/duckdb-wasm/dist/duckdb-eh.wasm?url';
import duckDBWorkerCoi from '@duckdb/duckdb-wasm/dist/duckdb-browser-coi.worker.js?url';
import duckDBWasmCoi from '@duckdb/duckdb-wasm/dist/duckdb-coi.wasm?url';
import duckDBThreadWorkerCoi from '@duckdb/duckdb-wasm/dist/duckdb-browser-coi.pthread.worker.js?url';

import Worker from 'web-worker';


const MANUAL_BUNDLES: duckdb.DuckDBBundles = {
	mvp: {
		mainModule: duckDBWasm,
		mainWorker: duckDBWorker,
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
    console.log(bundle.pthreadWorker)
	await db.instantiate(bundle.mainModule, bundle.pthreadWorker);

	return db;
};

const addViewDDL = (table: RemoteParquetFile): string => {
	return `
    CREATE VIEW ${table.table_name} AS (
        SELECT * 
        FROM '${table.table_name}.parquet'
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
		const exec = views.map(async (t) => {
            const temp_conn = await db.connect();
			await db.registerFileURL(`${t.table_name}.parquet`, `${t.base_url}/${t.table_name}.parquet`);
            temp_conn.query(addViewDDL(t));
            temp_conn.close();
        })
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

