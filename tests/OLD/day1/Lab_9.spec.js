//Lab 9: Navigate to a News Website

import { test, expect } from '@playwright/test';

test('validate', async ({ page }) => {
  await page.goto("https://www.bbc.com/news");
  await expect.toHaveURL("https://www.bbc.com/news");
  const title=await page.title();
 
  console.log(title);
  
})