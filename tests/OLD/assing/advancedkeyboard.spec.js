import { test, expect } from '@playwright/test';
test.setTimeout(120000);
test('test', async ({ page }) => {
   // Navigate to the DemoQA Text Box page
  await page.goto('https://demoqa.com/text-box');
    //  Focus on the "Full Name" text box
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Nikhil');
  //  Press Tab to move focus to the next input field (Email)
  await page.getByRole('textbox', { name: 'Full Name' }).press('Tab');
    //  Fill the Email field
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('Nikhil@GMAIL.COM');
  //  Press Shift+Tab to move BACK to the Full Name field
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Shift+Tab');
    //  Select all text in the Full Name field 
  await page.getByRole('textbox', { name: 'Full Name' }).press('ControlOrMeta+A');
   //  Overwrite by typing LAST NAME ("ULIYAR")
  await page.getByRole('textbox', { name: 'Full Name' }).fill('GOWDA');
   //  (Verification Point):
  await expect(page.getByRole('textbox', { name: 'Full Name' })).toHaveValue('GOWDA');
});