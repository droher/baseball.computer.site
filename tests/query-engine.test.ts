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
