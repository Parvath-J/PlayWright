//Lab 8: Practice with a Different Domain

import { test, expect } from '@playwright/test';

test('validate', async ({ page }) => {
  await page.goto("https://github.com/");
  const title=await page.title();
  const url=await page.url();
  console.log(title);
  console.log(url);

  await expect(page).toHaveTitle("GitHub: Let's build from here · GitHub");
 
})