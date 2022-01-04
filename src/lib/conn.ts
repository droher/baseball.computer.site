import type { AsyncDuckDB, AsyncDuckDBConnection } from '@duckdb/duckdb-wasm';
import type { Table } from 'apache-arrow';

import * as duckdb from '@duckdb/duckdb-wasm';

import duckDBWorker from '/shim/duckdb/duckdb-browser.worker?url';
import duckDBWasm from '/shim/duckdb/duckdb.wasm?url';
import duckDBWorkerNext from '/shim/duckdb/duckdb-browser-next.worker?url';
import duckDBWasmNext from '/shim/duckdb/duckdb-next.wasm?url';


const MANUAL_BUNDLES: duckdb.DuckDBBundles = {
	mvp: {
		mainModule: duckDBWasm,
		mainWorker: duckDBWorker,
	},
	next: {
		mainModule: duckDBWasmNext,
		mainWorker: duckDBWorkerNext
	}
}

const BASE_URL = 'https://f002.backblazeb2.com/file/boxball/transform/parquet/baseballdatabank';

// const TABLES = ['allstar_full', 'appearances', 'awards_managers', 'awards_players', 'awards_share_managers', 'awards_share_players', 'batting', 'batting_post', 'college_playing', 'fielding', 'fielding_of', 'fielding_of_split', 'fielding_post', 'hall_of_fame', 'home_games', 'managers', 'managers_half', 'parks', 'people', 'pitching', 'pitching_post', 'salaries', 'schools', 'series_post', 'teams', 'teams_franchises', 'teams_half'];

const TABLES = ['batting'];

const getDB = async (): Promise<AsyncDuckDB> => {
	const bundle = await duckdb.selectBundle(MANUAL_BUNDLES);
	console.log("Using DuckDB bundle: ", bundle);
	const logger = new duckdb.ConsoleLogger();
	const worker = new Worker(bundle.mainWorker);
	const db = new duckdb.AsyncDuckDB(logger, worker);
	await db.instantiate(bundle.mainModule);
	return db;
};

const getTableFields = (table: Table<any>): Array<string> => {
	return table.schema.fields.map((f) => f.name);
};

const TABLE_DDL: Array<string> =
	TABLES.map((t) => [t, `${BASE_URL}/${t}.parquet`])
		.map((info) => `CREATE TABLE ${info[0]} AS SELECT * FROM "${info[1]}"`);

const addTables = async (conn: AsyncDuckDBConnection): Promise<void> => {
	const exec = TABLE_DDL.map((ddl) => conn.query(ddl))
	await Promise.all(exec);
	return;
};

export { addTables, getDB, getTableFields };
