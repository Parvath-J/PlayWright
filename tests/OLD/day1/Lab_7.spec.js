//Lab 7: Navigate and Check Page Content

import {test, expect} from "@playwright/test";

test('validate', async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await expect(page.locator('h1')).toHaveText("Welcome to the-internet");

 
})