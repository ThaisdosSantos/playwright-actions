import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration file.
 *
 * This configuration defines:
 * - test directory
 * - browser projects
 * - retry strategy
 * - screenshots and video evidence
 * - HTML reports
 * - CI/CD behavior
 */
export default defineConfig({
  /**
   * Directory where the test files are located.
   */
  testDir: './e2e',

  /**
   * Run tests in parallel.
   */
  fullyParallel: true,

  /**
   * Prevent accidentally committed test.only in CI.
   */
  forbidOnly: !!process.env.CI,

  /**
   * Retry failed tests only in CI environment.
   */
  retries: process.env.CI ? 2 : 0,

  /**
   * Use a single worker in CI to improve stability.
   */
  workers: process.env.CI ? 1 : undefined,

  /**
   * Generate HTML test reports.
   */
  reporter: 'html',

  /**
   * Shared settings for all browser projects.
   */
  use: {
    /**
     * Base application URL.
     */
    baseURL: 'https://loginxp.vercel.app',

    /**
     * Collect execution trace on first retry.
     */
    trace: 'on-first-retry',

    /**
     * Record video evidence for all executed tests.
     */
    video: 'on',

    /**
     * Capture screenshots only when tests fail.
     */
    screenshot: 'only-on-failure',
  },

  /**
   * Browser configurations.
   */
  projects: [
    {
      /**
       * Google Chrome / Chromium browser.
       */
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      /**
       * Mozilla Firefox browser.
       */
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      /**
       * Safari / WebKit browser.
       */
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    {
      /**
       * Microsoft Edge browser.
       */
      name: 'edge',
      use: { ...devices['Desktop Edge'] },
    },
  ],
});