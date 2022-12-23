import type { RemoteParquetFile } from './db';

const BASE_URL = 'https://baseball.computer';

const SIMPLE_TABLES = [
	'franchise',
	'gamelog',
	'park',
	'people',
	'roster',
	'schedule'
];
const EVENT_TABLES = [
	'box_score_batting_lines',
	'box_score_caught_stealing',
	'box_score_double_plays',
	'box_score_fielding_lines',
	'box_score_game',
	'box_score_hit_by_pitches',
	'box_score_home_runs',
	'box_score_pinch_hitting_lines',
	'box_score_pinch_running_lines',
	'box_score_pitching_lines',
	'box_score_stolen_bases',
	'box_score_team',
	'box_score_team_batting_lines',
	'box_score_team_fielding_lines',
	'box_score_team_miscellaneous_lines',
	'box_score_triple_plays',
	'box_score_umpire',
	'event',
	'event_baserunning_advance_attempt',
	'event_baserunning_play',
	'event_fielding_play',
	'event_flag',
	'event_hit_location',
	'event_out',
	'event_pitch',
	'event_plate_appearance',
	'event_starting_base_state',
	'game',
	'game_fielding_appearance',
	'game_lineup_appearance',
	'game_team',
	'game_umpire',
];

const getBoxballFiles = (): RemoteParquetFile[] => {
	const databankFiles: RemoteParquetFile[] = SIMPLE_TABLES.map((t) => ({
		base_url: `${BASE_URL}/simple`,
		table_name: t
	}));
	const retrosheetFiles: RemoteParquetFile[] = EVENT_TABLES.map((t) => ({
		base_url: `${BASE_URL}/event`,
		table_name: t
	}));
	return databankFiles.concat(retrosheetFiles);
};

export { getBoxballFiles }
