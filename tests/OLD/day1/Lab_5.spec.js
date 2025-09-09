//Lab 5: Navigate to a Sub-page

import { test, expect } from '@playwright/test';

test('validate', async ({ page }) => {
  await page.goto("https://playwright.dev/python/docs/intro");
  await expect(page).toHaveTitle("Playwright for Python")


  await expect(page).toHaveURL("/python/docs/intro");
  
 
})