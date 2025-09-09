import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Set longer timeout for demo purposes
  test.setTimeout(60_000);  // 60 seconds

  // Navigate to GitHub
  await page.goto('https://github.com/');
  console.log('1. Navigated to GitHub homepage');

  // Explore Sign up flow
  await page.getByRole('link', { name: 'Sign up' }).click();
  console.log('2. Clicked Sign up button');

  await page.getByRole('heading', { name: 'Create your free account' }).click();
  console.log('3. Sign up page loaded');

  // Go back to homepage
  await page.goto('https://github.com/');
  console.log('4. Returned to homepage');

  // Explore Platform flow
  await page.getByRole('button', { name: 'Platform' }).click();
  console.log('5. Clicked Platform button');

  // Explore GitHub Copilot Write better
  await page.getByRole('link', { name: 'GitHub Copilot Write better' }).click();
  console.log('6. Clicked GitHub Copilot button');

  // Explore Home page
  await page.getByRole('link', { name: 'Homepage', exact: true }).click();
  console.log('7. Clicked Homepage button');
});