import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("$app/environment", () => ({ browser: true, dev: false }));
vi.mock("$lib/telemetry", () => ({ track: vi.fn() }));
vi.mock("$lib/io/db", () => ({
  DbContextManager: { init: vi.fn() },
}));

const { DbState, QueryStatus } = await import("./db.svelte");
const { DbContextManager } = await import("$lib/io/db");

describe("DbState", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("init() is idempotent under concurrent calls", async () => {
    const fake = { tag: "manager" };
    (DbContextManager.init as ReturnType<typeof vi.fn>).mockResolvedValue(fake);
    const s = new DbState();
    const [m1, m2, m3] = await Promise.all([s.init(), s.init(), s.init()]);
    expect(DbContextManager.init).toHaveBeenCalledTimes(1);
    expect(m1).toBe(fake);
    expect(m2).toBe(fake);
    expect(m3).toBe(fake);
    expect(s.manager).toBe(fake);
  });

  it("init() is idempotent across sequential calls", async () => {
    const fake = { tag: "manager" };
    (DbContextManager.init as ReturnType<typeof vi.fn>).mockResolvedValue(fake);
    const s = new DbState();
    await s.init();
    await s.init();
    expect(DbContextManager.init).toHaveBeenCalledTimes(1);
  });

  it("shares a failed attempt and allows a later retry", async () => {
    const fake = { tag: "manager" };
    (DbContextManager.init as ReturnType<typeof vi.fn>)
      .mockRejectedValueOnce(new Error("catalog unavailable"))
      .mockResolvedValueOnce(fake);
    const s = new DbState();
    const first = s.init();
    const concurrent = s.init();

    expect(first).toBe(concurrent);
    await expect(first).rejects.toThrow("catalog unavailable");
    await expect(concurrent).rejects.toThrow("catalog unavailable");
    expect(DbContextManager.init).toHaveBeenCalledTimes(1);
    expect(s.manager).toBeNull();

    await expect(s.init()).resolves.toBe(fake);
    expect(DbContextManager.init).toHaveBeenCalledTimes(2);
    expect(s.manager).toBe(fake);
  });

  it("beforeQuery sets Running and emits start event", async () => {
    const { track } = await import("$lib/telemetry");
    const s = new DbState();
    const { start } = s.beforeQuery();
    expect(s.status).toBe(QueryStatus.Running);
    expect(s.error).toBe("");
    expect(typeof start).toBe("number");
    expect(track).toHaveBeenCalledWith("query_started");
  });

  it("querySucceeded transitions to Success and emits success event", async () => {
    const { track } = await import("$lib/telemetry");
    const s = new DbState();
    s.querySucceeded(performance.now() - 100, 42);
    expect(s.status).toBe(QueryStatus.Success);
    expect(track).toHaveBeenCalledWith(
      "query_succeeded",
      expect.objectContaining({ rows: 42 })
    );
  });

  it("explain delegates to manager and returns plan text", async () => {
    const explain = vi.fn().mockResolvedValue("PROJECTION\n  SCAN");
    (DbContextManager.init as ReturnType<typeof vi.fn>).mockResolvedValue({
      explain,
    });
    const s = new DbState();
    const text = await s.explain("SELECT 1", false);
    expect(explain).toHaveBeenCalledWith("SELECT 1", false);
    expect(text).toContain("PROJECTION");
  });

  it("explain forwards analyze=true to manager", async () => {
    const explain = vi.fn().mockResolvedValue("ok");
    (DbContextManager.init as ReturnType<typeof vi.fn>).mockResolvedValue({
      explain,
    });
    const s = new DbState();
    await s.explain("SELECT 1", true);
    expect(explain).toHaveBeenCalledWith("SELECT 1", true);
  });

  it("queryCancelled drops status out of Running and emits cancel event", async () => {
    const { track } = await import("$lib/telemetry");
    const s = new DbState();
    s.beforeQuery();
    expect(s.status).toBe(QueryStatus.Running);
    s.queryCancelled(performance.now());
    expect(s.status).toBe(QueryStatus.Idle);
    expect(track).toHaveBeenCalledWith(
      "query_cancelled",
      expect.objectContaining({ ms: expect.any(Number) })
    );
  });

  it("queryFailed records error and emits fail event", async () => {
    const { track } = await import("$lib/telemetry");
    const s = new DbState();
    s.queryFailed(performance.now(), new Error("boom"));
    expect(s.status).toBe(QueryStatus.Failure);
    expect(s.error).toBe("boom");
    expect(track).toHaveBeenCalledWith(
      "query_failed",
      expect.objectContaining({ error_class: "Error" })
    );
  });
});
