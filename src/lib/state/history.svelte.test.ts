import { describe, it, expect, beforeEach, vi } from "vitest";

vi.mock("$app/environment", () => ({ browser: true, dev: false }));

class MemoryStorage {
  private map = new Map<string, string>();
  getItem(k: string): string | null {
    return this.map.has(k) ? (this.map.get(k) as string) : null;
  }
  setItem(k: string, v: string): void {
    this.map.set(k, String(v));
  }
  removeItem(k: string): void {
    this.map.delete(k);
  }
  clear(): void {
    this.map.clear();
  }
  key(i: number): string | null {
    return [...this.map.keys()][i] ?? null;
  }
  get length(): number {
    return this.map.size;
  }
}
vi.stubGlobal("localStorage", new MemoryStorage());

const { HistoryState } = await import("./history.svelte");

const STORAGE_KEY = "bc.queryHistory.v1";

describe("HistoryState", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("starts empty when storage is empty", () => {
    const h = new HistoryState();
    expect(h.entries).toEqual([]);
  });

  it("start() prepends a running entry and persists", () => {
    const h = new HistoryState();
    const id = h.start("SELECT 1");
    expect(h.entries[0].id).toBe(id);
    expect(h.entries[0].status).toBe("running");
    const persisted = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    expect(persisted[0].query).toBe("SELECT 1");
  });

  it("finalize updates status and metrics", () => {
    const h = new HistoryState();
    const id = h.start("SELECT 1");
    h.finalize(id, { status: "success", ms: 12, rows: 7 });
    expect(h.entries[0].status).toBe("success");
    expect(h.entries[0].ms).toBe(12);
    expect(h.entries[0].rows).toBe(7);
  });

  it("caps at 50 entries (FIFO truncation)", () => {
    const h = new HistoryState();
    for (let i = 0; i < 60; i += 1) h.start(`SELECT ${i}`);
    expect(h.entries).toHaveLength(50);
    expect(h.entries[0].query).toBe("SELECT 59");
    expect(h.entries[49].query).toBe("SELECT 10");
  });

  it("restores from localStorage", () => {
    const seed = [
      {
        id: "a",
        query: "Q",
        timestamp: 123,
        status: "success" as const,
        ms: 5,
        rows: 1,
      },
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
    const h = new HistoryState();
    expect(h.entries).toHaveLength(1);
    expect(h.entries[0].id).toBe("a");
  });

  it("converts stale running entries to cancelled on load", () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([{ id: "a", query: "Q", timestamp: 1, status: "running" }])
    );
    const h = new HistoryState();
    expect(h.entries[0].status).toBe("cancelled");
  });

  it("recovers silently from malformed JSON", () => {
    localStorage.setItem(STORAGE_KEY, "not json{");
    const h = new HistoryState();
    expect(h.entries).toEqual([]);
  });

  it("recovers silently from non-array payload", () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ wrong: "shape" }));
    const h = new HistoryState();
    expect(h.entries).toEqual([]);
  });

  it("filters entries that fail shape check", () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([
        { id: "good", query: "Q", timestamp: 1, status: "success" },
        { id: 123 }, // bad
        null,
      ])
    );
    const h = new HistoryState();
    expect(h.entries).toHaveLength(1);
    expect(h.entries[0].id).toBe("good");
  });

  it("truncates very long queries before persisting", () => {
    const h = new HistoryState();
    const long = "x".repeat(10_000);
    h.start(long);
    expect(h.entries[0].query.length).toBeLessThanOrEqual(4 * 1024);
  });

  it("clear() empties and persists", () => {
    const h = new HistoryState();
    h.start("Q");
    h.clear();
    expect(h.entries).toEqual([]);
    expect(localStorage.getItem(STORAGE_KEY)).toBe("[]");
  });
});
