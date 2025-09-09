//Lab 10: Combine Title and URL Assertions

import { test, expect } from '@playwright/test';

test('validate', async ({ page }) => {
  await page.goto("https://nodejs.org/en");
  await expect(page).toHaveTitle(/Node.js/);

  await expect.toHaveURL("https://nodejs.org/en");
  
 
  console.log("All Assertions Passed for Node.js!");
 
})