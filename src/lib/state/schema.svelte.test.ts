import { describe, it, expect } from "vitest";

vi.mock("$app/environment", () => ({ browser: true, dev: false }));

const { SchemaState } = await import("./schema.svelte");

import { vi } from "vitest";

describe("SchemaState", () => {
  it("seeds from initial map", () => {
    const s = new SchemaState({ "main.foo": ["a", "b"] });
    expect(s.tables).toEqual({ "main.foo": ["a", "b"] });
  });

  it("addTable adds and removeTable removes", () => {
    const s = new SchemaState();
    s.addTable("local.x", ["c1"]);
    expect(s.tables["local.x"]).toEqual(["c1"]);
    s.removeTable("local.x");
    expect(s.tables).not.toHaveProperty("local.x");
  });

  it("removeTable on missing key is a no-op", () => {
    const s = new SchemaState({ "a.b": ["c"] });
    s.removeTable("does.not.exist");
    expect(s.tables).toEqual({ "a.b": ["c"] });
  });

  it("uniqueTableName sanitizes filename and handles collisions", () => {
    const s = new SchemaState();
    expect(s.uniqueTableName("My Data.csv")).toBe("my_data");
    s.addTable("local.my_data", []);
    expect(s.uniqueTableName("My Data.csv")).toBe("my_data_2");
    s.addTable("local.my_data_2", []);
    expect(s.uniqueTableName("My Data.csv")).toBe("my_data_3");
  });

  it("uniqueTableName falls back to 'file' when name has no valid chars", () => {
    const s = new SchemaState();
    expect(s.uniqueTableName("---.csv")).toBe("file");
  });

  it("uniqueTableName suffixes reserved SQL words", () => {
    const s = new SchemaState();
    expect(s.uniqueTableName("select.csv")).toBe("select_t");
    expect(s.uniqueTableName("Order.parquet")).toBe("order_t");
  });

  it("version increments on add and remove", () => {
    const s = new SchemaState();
    const v0 = s.version;
    s.addTable("local.x", ["c"]);
    expect(s.version).toBe(v0 + 1);
    s.removeTable("local.x");
    expect(s.version).toBe(v0 + 2);
    s.removeTable("not.there"); // no-op should not bump version
    expect(s.version).toBe(v0 + 2);
  });

  it("bySchema groups qualified names sorted", () => {
    const s = new SchemaState({
      "main_models.players": ["id", "name"],
      "main_models.teams": ["id"],
      "local.upload": ["x"],
    });
    const grouped = s.bySchema;
    expect(grouped.map(([k]) => k)).toEqual(["local", "main_models"]);
    const main = grouped.find(([k]) => k === "main_models")!;
    expect(main[1].map(([t]) => t)).toEqual(["players", "teams"]);
    const local = grouped.find(([k]) => k === "local")!;
    expect(local[1][0]).toEqual(["upload", ["x"]]);
  });
});
