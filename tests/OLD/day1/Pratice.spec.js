import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
  await page.getByRole('textbox', { name: 'Name:' }).click();
  await page.getByRole('textbox', { name: 'Name:' }).fill('Parvath J');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('hello@example.com');
  await page.getByText('Male', { exact: true }).click();
  await page.getByText('Male', { exact: true }).check();
  await page.getByRole('button', { name: 'Login' }).click();
});