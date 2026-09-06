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

test("schema sidebar inserts qualified table name into editor", async ({
  page,
}) => {
  await page.goto(`/query-engine?query=${SELECT_1_BASE64}`);
  // schema is seeded from prerendered catalog.json, so any rendered <details>
  // element under the Schema heading proves the tree mounted.
  await expect(page.getByRole("heading", { name: "Schema" })).toBeVisible();
  const firstSchema = page.locator(".schema-browser details").first();
  const schemaText =
    (await firstSchema.locator("summary").first().textContent())?.trim() ?? "";
  expect(schemaText.length).toBeGreaterThan(0);
  await firstSchema.click();
  const firstTable = page
    .locator(".schema-browser details details summary button")
    .first();
  const tableText = (await firstTable.textContent())?.trim() ?? "";
  expect(tableText.length).toBeGreaterThan(0);
  await firstTable.click();
  // SchemaBrowser inserts `${schemaName}.${table}` — assert the full
  // qualified form so a regression to bare table name is caught.
  await expect(page.locator(".cm-content")).toContainText(
    `${schemaText}.${tableText}`
  );
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

test("production catalog is a read-only DuckLake", async ({ page }) => {
  const query =
    "SELECT type, readonly FROM duckdb_databases() WHERE database_name = 'bc_remote'";
  await page.goto(`/query-engine?query=${encodeURIComponent(btoa(query))}`);
  const downloadPromise = page.waitForEvent("download", { timeout: 120_000 });
  await page.getByRole("button", { name: /^Download CSV$/ }).click();
  const download = await downloadPromise;
  const path = await download.path();
  const csv = await fs.readFile(path, "utf-8");
  expect(csv.replace(/\r\n/g, "\n").trim()).toBe(
    "type,readonly\nducklake,true"
  );
});

test("baseball query reads DuckLake parquet and exports results", async ({
  page,
}) => {
  const parquetRequests: string[] = [];
  const legacyRequests: string[] = [];
  page.on("request", (request) => {
    const url = request.url();
    if (url.includes("/baseball/v1/") && url.includes(".parquet"))
      parquetRequests.push(url);
    if (url.includes("data.baseball.computer/dbt/")) legacyRequests.push(url);
  });
  const query =
    "SELECT p.first_name, p.last_name, m.home_runs FROM metrics_player_career_offense m JOIN people p USING (player_id) WHERE m.home_runs > 0 ORDER BY m.home_runs DESC LIMIT 10";
  await page.goto(`/query-engine?query=${encodeURIComponent(btoa(query))}`);
  const downloadPromise = page.waitForEvent("download", { timeout: 120_000 });
  await page.getByRole("button", { name: /^Download CSV$/ }).click();
  const download = await downloadPromise;
  const path = await download.path();
  const csv = await fs.readFile(path, "utf-8");
  const lines = csv.trim().split(/\r?\n/);
  expect(lines[0]).toBe("first_name,last_name,home_runs");
  expect(lines).toHaveLength(11);
  const homeRuns = lines.slice(1).map((line) => Number(line.split(",").at(-1)));
  expect(homeRuns.every((n) => Number.isFinite(n) && n > 0)).toBe(true);
  expect(homeRuns).toEqual([...homeRuns].sort((a, b) => b - a));
  expect(parquetRequests.length).toBeGreaterThan(0);
  expect(legacyRequests).toEqual([]);
  await expect(page.locator(".alert-error")).toHaveCount(0);
});

test("local CSV can join a DuckLake table", async ({ page }) => {
  await page.goto(`/query-engine?query=${SELECT_1_BASE64}`);
  await page.locator('input[type="file"]').setInputFiles({
    name: "join_fixture.csv",
    mimeType: "text/csv",
    buffer: Buffer.from("id,label\n1,local\n"),
  });
  await expect(page.locator(".schema-browser")).toContainText("join_fixture", {
    timeout: 120_000,
  });
  const query =
    "SELECT l.label, p.player_id FROM local.main.join_fixture l JOIN (SELECT player_id, row_number() OVER (ORDER BY player_id) AS id FROM people) p USING (id)";
  await page.locator(".cm-content").fill(query);
  const downloadPromise = page.waitForEvent("download", { timeout: 120_000 });
  await page.getByRole("button", { name: /^Download CSV$/ }).click();
  const download = await downloadPromise;
  const path = await download.path();
  const csv = await fs.readFile(path, "utf-8");
  const lines = csv.trim().split(/\r?\n/);
  expect(lines).toHaveLength(2);
  expect(lines[0]).toBe("label,player_id");
  expect(lines[1]).toMatch(/^local,.+/);
});
