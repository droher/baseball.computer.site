import type { RecordBatch, Table } from 'apache-arrow';
import type { AsyncDuckDB, AsyncDuckDBConnection } from '@duckdb/duckdb-wasm';
import * as duckdb from '@duckdb/duckdb-wasm';

import duckDBWorker from '@duckdb/duckdb-wasm/dist/duckdb-browser-mvp.worker.js?url';
import duckDBWasm from '@duckdb/duckdb-wasm/dist/duckdb-mvp.wasm?url';
import duckDBWorkerEh from '@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js?url';
import duckDBWasmEh from '@duckdb/duckdb-wasm/dist/duckdb-eh.wasm?url';
// TODO: enable this when we have a working version of the COI bundle
// import duckDBWorkerCoi from '@duckdb/duckdb-wasm/dist/duckdb-browser-coi.worker.js?url';
// import duckDBWasmCoi from '@duckdb/duckdb-wasm/dist/duckdb-coi.wasm?url';
// import duckDBThreadWorkerCoi from '@duckdb/duckdb-wasm/dist/duckdb-browser-coi.pthread.worker.js?url';

const MANUAL_BUNDLES: duckdb.DuckDBBundles = {
	mvp: {
		mainModule: duckDBWasm,
		mainWorker: duckDBWorker
	},
	eh: {
		mainModule: duckDBWasmEh,
		mainWorker: duckDBWorkerEh
	}
	// TODO: enable this when we have a working version of the COI bundle
	// https://github.com/duckdb/duckdb-wasm/issues/939
	// coi: {
	// 	mainModule: duckDBWasmCoi,
	// 	mainWorker: duckDBWorkerCoi,
	// 	pthreadWorker: duckDBThreadWorkerCoi
	// }
};

const getDB = async (): Promise<AsyncDuckDB> => {
	const bundle = await duckdb.selectBundle(MANUAL_BUNDLES);
	console.debug('Using DuckDB bundle: ', bundle);
	const logger = new duckdb.ConsoleLogger(duckdb.LogLevel.INFO);
	const worker = new Worker(String(bundle.mainWorker));
	const db = new duckdb.AsyncDuckDB(logger, worker);
	await db.instantiate(bundle.mainModule);
	return db;
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

	private constructor(db: AsyncDuckDB, conn: AsyncDuckDBConnection) {
		this.db = db;
		this.conn = conn;
	}

	static async init(): Promise<DbContextManager> {
		console.debug('Initializing DB...');
		const db = await getDB();

		const conn = await db.connect();
		await conn.query(`ATTACH 'https://data.baseball.computer/dbt/bc_remote.db' (READ_ONLY)`);
		await conn.query(`USE bc_remote`);
		await conn.query(`SET SCHEMA=main_models`);

		console.debug('DB is ready for queries.');
		return new DbContextManager(db, conn);
	}

	async close() {
		await this.conn.query(`DETACH bc_remote`);
		await this.conn.close();
		await this.db.terminate();
	}

	async *getBatches(query: string): AsyncGenerator<{batch: RecordBatch, done: boolean}> {
		const reader = await this.conn.send(query);
		let iter = await reader.next();
		while (!iter.done) {
			const batch = iter.value;
			iter = await reader.next();
			yield {batch: batch, done: Boolean(iter.done)};
		}
	}
}

export { DbContextManager, getTableFields };
export type { RemoteParquetFile };
