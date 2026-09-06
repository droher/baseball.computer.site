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

  it("maps DuckLake data request failures to an actionable message", () => {
    const raw =
      "NetworkError: Failed to execute 'send' on 'XMLHttpRequest': Failed to load 'https://data.baseball.computer/baseball/v1/x.parquet'.";
    const message = friendlyQueryError(raw);
    expect(message).toContain("DuckLake");
    expect(message).toContain("try again");
    expect(message).not.toContain("/dbt/");
  });

  it("maps fetch failures", () => {
    expect(friendlyQueryError("TypeError: Failed to fetch")).toContain(
      "temporarily unavailable"
    );
  });

  it("passes through unknown errors", () => {
    expect(friendlyQueryError("Syntax error near 'SELCT'")).toBe(
      "Syntax error near 'SELCT'"
    );
  });
});
