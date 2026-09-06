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
      "Network error initializing or querying the browser database. " +
      "Check your connection and try again. If the problem persists, a " +
      "required DuckLake extension, catalog, or data file may be temporarily " +
      "unavailable."
    );
  }
  return raw;
};
