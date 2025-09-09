import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('mobile');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Samsung Galaxy M05 (Mint' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Amazon.in' }).click();
  await page1.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
  await page1.getByRole('textbox', { name: 'Enter your mobile number or' }).click();
  await page1.getByRole('textbox', { name: 'Enter your mobile number or' }).fill('8050489734');
  await page1.getByRole('button', { name: 'Continue' }).click();
  await page1.getByRole('textbox', { name: 'Password' }).fill('fuckprime');
  await page1.getByRole('button', { name: 'Sign in' }).click();
  await page1.getByRole('link', { name: 'Hello, Parvath Account & Lists' }).click();
  await page1.getByRole('link', { name: 'Your Orders Track, return, or' }).click();
  await page1.getByText('DR. MOREPEN BP-02 AUTOMATIC').click();
  await page1.goto('https://www.amazon.in/gp/your-account/order-history?ref_=ya_d_c_yo');
  await page1.getByRole('link', { name: 'Amazon.in Prime' }).click();
});