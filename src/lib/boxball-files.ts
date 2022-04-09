import type { RemoteParquetFile } from './db';

const BASE_URL = 'https://boxball.s3.us-west-002.backblazeb2.com/transform/parquet';

const DATABANK_TABLES = [
	'allstar_full',
	'appearances',
	'awards_managers',
	'awards_players',
	'awards_share_managers',
	'awards_share_players',
	'batting',
	'batting_post',
	'college_playing',
	'fielding',
	'fielding_of',
	'fielding_of_split',
	'fielding_post',
	'hall_of_fame',
	'home_games',
	'managers',
	'managers_half',
	'parks',
	'people',
	'pitching',
	'pitching_post',
	'salaries',
	'schools',
	'series_post',
	'teams',
	'teams_franchises',
	'teams_half'
];
const RETROSHEET_TABLES = ['event'];

const getBoxballFiles = (): RemoteParquetFile[] => {
	const databankFiles: RemoteParquetFile[] = DATABANK_TABLES.map((t) => ({
		base_url: `${BASE_URL}/baseballdatabank`,
		table_name: t
	}));
	const retrosheetFiles: RemoteParquetFile[] = RETROSHEET_TABLES.map((t) => ({
		base_url: `${BASE_URL}/retrosheet`,
		table_name: t
	}));
	return databankFiles.concat(retrosheetFiles);
};

export { getBoxballFiles }
