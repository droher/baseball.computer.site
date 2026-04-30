const NETWORK_PATTERNS = [
  "NetworkError",
  "Failed to execute 'send' on 'XMLHttpRequest'",
  "Failed to fetch",
  "ERR_FAILED",
];

export const friendlyQueryError = (raw: string): string => {
  if (
    raw.includes("Must pass at least one record batch or an explicit Schema")
  ) {
    return "Query returned 0 rows.";
  }
  if (NETWORK_PATTERNS.some((p) => raw.includes(p))) {
    return (
      "Network error loading data partitions. The Cloudflare R2 bucket " +
      "serving data.baseball.computer/dbt/*.parquet does not currently " +
      "return CORS headers, which blocks any query that materializes " +
      "parquet rows in the browser. Tracking upstream; works in non-browser " +
      "DuckDB clients (Python, R, CLI)."
    );
  }
  return raw;
};
