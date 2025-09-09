import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/key_presses');
  await page.locator('#target').click();
  await page.locator('#target').press('f');
  await page.waitForTimeout(4000);
  const v1 = page.locator('#result')
  await expect(v1).toContainText('You entered: F');
});