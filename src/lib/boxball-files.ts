import type { RemoteParquetFile } from './db';

const BASE_URL = 'https://baseball.computer';

const SIMPLE_TABLES = [
	'park'
];
const RETROSHEET_TABLES = ['event'];

const getBoxballFiles = (): RemoteParquetFile[] => {
	const databankFiles: RemoteParquetFile[] = SIMPLE_TABLES.map((t) => ({
		base_url: `${BASE_URL}/simple`,
		table_name: t
	}));
	const retrosheetFiles: RemoteParquetFile[] = RETROSHEET_TABLES.map((t) => ({
		base_url: `${BASE_URL}/event`,
		table_name: t
	}));
	return databankFiles.concat(retrosheetFiles);
};

export { getBoxballFiles }
