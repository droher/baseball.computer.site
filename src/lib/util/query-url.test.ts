import { describe, it, expect } from "vitest";
import { encodeQuery, decodeQuery } from "./query-url";

describe("query-url", () => {
  it("round-trips a simple query", () => {
    const q = "SELECT 1";
    expect(decodeQuery(encodeQuery(q))).toBe(q);
  });

  it("round-trips a query with whitespace and special chars", () => {
    const q = "SELECT * FROM foo WHERE x = 'hello world' AND y > 1";
    expect(decodeQuery(encodeQuery(q.trim()))).toBe(q);
  });

  it("trims input on encode", () => {
    expect(decodeQuery(encodeQuery("  SELECT 1  "))).toBe("SELECT 1");
  });

  it("returns empty string for null/undefined", () => {
    expect(decodeQuery(null)).toBe("");
    expect(decodeQuery(undefined)).toBe("");
    expect(decodeQuery("")).toBe("");
  });

  it("returns empty string on malformed input", () => {
    expect(decodeQuery("%not-base64%")).toBe("");
  });
});
