// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Login/);

  await page.locator("#username").fill("admin")
  await page.locator("#password").fill("admin")
  await page.locator('[type="submit"]').click()

  await expect(page).toHaveTitle(/TL Content/);
});
