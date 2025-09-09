import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.guru99.com/selenium/newtours/');
  await page.getByRole('link', { name: 'Hotels' }).click();
  await page.getByRole('link', { name: 'Hotels' }).click();
  await page.getByRole('link', { name: 'Car Rentals' }).dblclick();
  await page.getByRole('link', { name: 'Cruises' }).dblclick();
  await page.getByRole('cell', { name: 'Home', exact: true }).dblclick();
  await page.getByRole('link', { name: 'SIGN-ON' }).click();
  await page.getByRole('link', { name: 'REGISTER' }).dblclick();
  await page.waitForTimeout(4000);
  await page.mouse.move(200,100);
  await page.waitForTimeout(8000);
});