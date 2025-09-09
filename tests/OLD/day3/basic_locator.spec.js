import { test, expect } from '@playwright/test';

// Define a test case using Playwright Test Runner
test('test', async ({ page }) => {
  // Step 1: Navigate to GitHub homepage
  await page.goto('https://github.com/');
  console.log("1 Navigate to GitHub website");

  // Step 2: Try to locate the GitHub logo using a CSS class selector
  const cssSelector = await page.$(".octicon.octicon-mark-github");
  console.log("2 Found the logo by CSS Selector");

  // Step 3: Locate the "Sign in" link using Playwright's text selector
  const textSelector = await page.$("text=Sign in");
  console.log("3 Found Sign in by text Selector");

  // Step 4: Locate an element using XPath
  const xpathSelector = await page.$('xpath=//*[@id="hero-section-brand-heading"]');
  console.log("4 Found text by xpath Selector");
});
