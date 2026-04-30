export const EXAMPLE_QUERY = `-- Get over 200 offensive statistics for every player in MLB history
-- To get started, click the "Analyze" button below
-- To explore the database, check out the documentation:
-- https://docs.baseball.computer
SELECT
  p.first_name,
  p.last_name,
  m.*
FROM metrics_player_career_offense AS m
JOIN people AS p USING (player_id)
ORDER BY home_runs DESC`;
