import { describe, it, expect } from "vitest";
import { friendlyQueryError } from "./error-message";

describe("friendlyQueryError", () => {
  it("maps the empty-result perspective error", () => {
    expect(
      friendlyQueryError(
        "Must pass at least one record batch or an explicit Schema"
      )
    ).toBe("Query returned 0 rows.");
  });

  it("maps XMLHttpRequest network errors to a CORS-aware message", () => {
    const raw =
      "NetworkError: Failed to execute 'send' on 'XMLHttpRequest': Failed to load 'https://data.baseball.computer/dbt/x.parquet'.";
    expect(friendlyQueryError(raw)).toContain("CORS");
  });

  it("maps fetch failures", () => {
    expect(friendlyQueryError("TypeError: Failed to fetch")).toContain("CORS");
  });

  it("passes through unknown errors", () => {
    expect(friendlyQueryError("Syntax error near 'SELCT'")).toBe(
      "Syntax error near 'SELCT'"
    );
  });
});
