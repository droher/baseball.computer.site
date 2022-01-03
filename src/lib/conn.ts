import type { AsyncDuckDB, AsyncDuckDBConnection } from '@duckdb/duckdb-wasm';
import type { Table } from 'apache-arrow';

import * as duckdb from '@duckdb/duckdb-wasm';
import DuckDBWorker from '/shim/duckdb/duckdb-browser-next.worker?worker';
import duckURL from '/shim/duckdb/duckdb-next.wasm?url';

const BASE_URL = 'https://f002.backblazeb2.com/file/boxball/transform/parquet/baseballdatabank';

const getDB = async (): Promise<AsyncDuckDB> => {
	const logger = new duckdb.ConsoleLogger();
	const worker = new DuckDBWorker();
	const db = new duckdb.AsyncDuckDB(logger, worker);
	await db.instantiate(duckURL);
	return db;
};

const getTableFields = (table: Table<any>): Array<string> => {
	return table.schema.fields.map((f) => f.name);
};

const addTable = async (conn: AsyncDuckDBConnection, table_name: string): Promise<void> => {
	const full_uri = `${BASE_URL}/${table_name}.parquet`;
	const ddl = `CREATE OR REPLACE view ${table_name} AS  (SELECT * FROM "${full_uri}")`;
	conn.query(ddl);
};

export { addTable, getDB, getTableFields };
