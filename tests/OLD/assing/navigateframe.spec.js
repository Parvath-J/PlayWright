import { test, expect } from '@playwright/test';
test.setTimeout(120000);
test('test', async ({ page }) => {
   //  Navigate to the Nested Frames page
  await page.goto('https://demoqa.com/nestedframes');
   //  Verify the heading on the page
  await page.getByRole('heading', { name: 'Nested Frames' }).click();
   // Access the parent frame (#frame1)
  await page.locator('#frame1').contentFrame().getByText('Parent frame').click();
   //  Access the child frame inside the parent frame
  await page.locator('#frame1').contentFrame().locator('iframe').contentFrame().getByText('Child Iframe').click();
   //  Assert that parent frame contains text "Parent frame"
  await expect(page.locator('#frame1').contentFrame().locator('body')).toContainText('Parent frame');
    // : Assert that child frame contains text "Child Iframe"
  await expect(page.locator('#frame1').contentFrame().locator('iframe').contentFrame().getByRole('paragraph')).toContainText('Child Iframe');
});