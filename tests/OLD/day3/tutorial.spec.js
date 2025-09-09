// locators-codegen.spec.js
const { test, expect } = require('@playwright/test');

test('GitHub locators example', async ({ page }) => {
  // Go to GitHub
  await page.goto('https://github.com');

  // CSS Selector: header
  const cssSelector = page.locator('header');
  await expect(cssSelector).toBeVisible();

  // Text Selector: Sign up
  const textSelector = page.locator('text=Sign up');
  await expect(textSelector).toBeVisible();

  // XPath Selector: Login link
  const xpathSelector = page.locator('//a[contains(@href, "login")]');
  await expect(xpathSelector).toBeVisible();

  // Multiple elements (all links)
  const allLinks = page.locator('a');
  console.log('Found links:', await allLinks.count());

  // Get element text
  console.log('Sign up text:', await textSelector.textContent());
});
