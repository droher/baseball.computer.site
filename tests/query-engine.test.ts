import { expect, test } from "@playwright/test";
import fs from "node:fs/promises";

const SELECT_1_BASE64 = encodeURIComponent(btoa("SELECT 1 AS a"));

test("query engine runs SELECT 1 and reveals the viewer", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (err) => {
    pageErrors.push(err.message);
  });
  await page.goto(`/query-engine?query=${SELECT_1_BASE64}`);
  // initialQuery from URL auto-runs on mount; viewer flips hidden→visible
  await page.waitForFunction(
    () => {
      const v = document.querySelector("perspective-viewer");
      return v !== null && !v.hasAttribute("hidden");
    },
    { timeout: 30_000 }
  );
  await expect(page.locator(".alert-error")).toHaveCount(0);
  expect(pageErrors).toEqual([]);
});

test("query engine downloads CSV", async ({ page }) => {
  await page.goto(`/query-engine?query=${SELECT_1_BASE64}`);
  // wait for db init implicitly by clicking Analyze first to warm things
  const downloadPromise = page.waitForEvent("download", { timeout: 60_000 });
  await page.getByRole("button", { name: /^Download CSV$/ }).click();
  const download = await downloadPromise;
  const path = await download.path();
  const content = await fs.readFile(path, "utf-8");
  // header row "a" then value "1"
  expect(content.replace(/\r\n/g, "\n").trim()).toBe("a\n1");
});

test("schema sidebar inserts table name into editor", async ({ page }) => {
  await page.goto(`/query-engine?query=${SELECT_1_BASE64}`);
  // schema is seeded from prerendered catalog.json, so any rendered <details>
  // element under the Schema heading proves the tree mounted.
  await expect(page.getByRole("heading", { name: "Schema" })).toBeVisible();
  const firstSchema = page.locator(".schema-browser details").first();
  await firstSchema.click();
  const firstTable = page
    .locator(".schema-browser details details summary button")
    .first();
  const tableText = (await firstTable.textContent())?.trim() ?? "";
  expect(tableText.length).toBeGreaterThan(0);
  await firstTable.click();
  // editor doc should now contain "<schema>.<table>"; we look for the
  // table substring inside the codemirror content area.
  await expect(page.locator(".cm-content")).toContainText(tableText);
});

test("history records a successful query", async ({ page }) => {
  await page.goto(`/query-engine?query=${SELECT_1_BASE64}`);
  await page.waitForFunction(
    () => {
      const v = document.querySelector("perspective-viewer");
      return v !== null && !v.hasAttribute("hidden");
    },
    { timeout: 30_000 }
  );
  await page.getByRole("button", { name: /Recent/ }).click();
  await expect(page.getByText("success", { exact: true })).toBeVisible();
});

test("EXPLAIN shows a plan", async ({ page }) => {
  await page.goto(`/query-engine?query=${SELECT_1_BASE64}`);
  // wait for db init by waiting for the Analyze button to be enabled
  await expect(page.getByRole("button", { name: /^EXPLAIN$/ })).toBeEnabled();
  await page.getByRole("button", { name: /^EXPLAIN$/ }).click();
  // DuckDB plans always include "PROJECTION" for SELECT
  await expect(page.locator("pre")).toContainText("PROJECTION", {
    timeout: 30_000,
  });
});

test("local CSV registration adds a queryable table", async ({ page }) => {
  await page.goto(`/query-engine?query=${SELECT_1_BASE64}`);
  await expect(page.getByRole("heading", { name: "Schema" })).toBeVisible();

  // Programmatic file upload via the hidden input
  const csv = "name,score\nalice,1\nbob,2\n";
  const tmpPath = "/tmp/playwright-fixture.csv";
  await fs.writeFile(tmpPath, csv);
  await page.locator('input[type="file"]').setInputFiles(tmpPath);

  // The new table should appear in the sidebar
  await expect(page.locator("text=local.playwright_fixture")).toBeVisible({
    timeout: 30_000,
  });
});
