import { describe, it, expect } from "vitest";
import { processModules, slugFromPath } from "./util";

describe("slugFromPath", () => {
  it("extracts slug from .md path", () => {
    expect(slugFromPath("/src/posts/hello-world.md")).toBe("hello-world");
  });
  it("extracts slug from .svelte.md path", () => {
    expect(slugFromPath("/src/posts/draft.svelte.md")).toBe("draft");
  });
  it("extracts slug from .svx path", () => {
    expect(slugFromPath("/src/posts/foo.svx")).toBe("foo");
  });
  it("returns null for non-post path", () => {
    expect(slugFromPath("/src/posts/notapost.txt")).toBeNull();
  });
});

describe("processModules", () => {
  const makeMod = (metadata: Record<string, unknown>) => () =>
    Promise.resolve({ metadata, default: () => null });

  it("filters out unpublished posts", async () => {
    const modules = {
      "/src/posts/a.md": makeMod({
        title: "A",
        author: "x",
        description: "d",
        date: "2024-01-01",
        published: true,
      }),
      "/src/posts/b.md": makeMod({
        title: "B",
        author: "x",
        description: "d",
        date: "2024-02-01",
        published: false,
      }),
    };
    const out = await processModules(modules);
    expect(out).toHaveLength(1);
    expect(out[0].title).toBe("A");
  });

  it("attaches slug from path", async () => {
    const modules = {
      "/src/posts/world-series.md": makeMod({
        title: "WS",
        author: "x",
        description: "d",
        date: "2024-01-01",
        published: true,
      }),
    };
    const out = await processModules(modules);
    expect(out[0].slug).toBe("world-series");
  });
});
