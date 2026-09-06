import { devices, type PlaywrightTestConfig } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL;

const config: PlaywrightTestConfig = {
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
  timeout: 120_000,
  workers: 2,
  use: { baseURL: baseURL ?? "http://localhost:4173" },
  webServer: baseURL
    ? undefined
    : {
        command: "npm run build && npm run preview",
        port: 4173,
        timeout: 120_000,
      },
  testDir: "tests",
  testMatch: /(.+\.)?(test|spec)\.[jt]s/,
};

export default config;
