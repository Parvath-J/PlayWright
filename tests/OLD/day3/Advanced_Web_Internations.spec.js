import { test, expect } from '@playwright/test';
import path from 'path';

test('Advanced Web Interactions using Playwright', async ({ page }) => {
  // 1. Setup and Navigation
  await page.goto('https://demoqa.com/alerts');
  await expect(page.locator('h1, .main-header')).toContainText('Alerts');

  // 2. Handle a Simple Alert
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('You clicked a button');
    await dialog.accept();
  });
  await page.click('#alertButton');
  await expect(page.locator('#alertButton')).toBeVisible();

  // 3. Handle a Confirmation Alert (OK)
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Do you confirm action?');
    await dialog.accept();
  });
  await page.click('#confirmButton');
  await expect(page.locator('#confirmResult')).toContainText('You selected Ok');

  // 4. Navigate and Interact within a Frame
  await page.goto('https://demoqa.com/nestedframes');
  const parentFrame = page.frameLocator('#frame1');
  await expect(parentFrame.locator('body')).toContainText('Parent frame');

  const childFrame = parentFrame.frameLocator('iframe');
  await expect(childFrame.locator('body')).toContainText('Child Iframe');

  // 5. Perform Complex Mouse Actions
  await page.goto('https://vinothqaacademy.com/mouse-event/');
  await page.waitForTimeout(50000);
  await expect(page.locator('#draggableElement')).toBeVisible();

  // Double Click
  const doubleClickBtn = page.locator('#Double Click Me');
  await page.waitForTimeout(5000);
  await doubleClickBtn.dblclick();
  await expect(doubleClickBtn).toContainText('Double Click Action is Performed');
  

  // Right Click
  const rightClickBtn = page.locator('#rightClick');
  await rightClickBtn.click({ button: 'right' });
  await expect(page.locator('#contextMenu')).toBeVisible();

  // Mouse Hover
  const hoverBtn = page.locator('#mouseHover');
  await hoverBtn.hover();
  await expect(page.locator('#tooltip')).toBeVisible();

  // 6. Execute Advanced Keyboard Inputs
  await page.goto('https://demoqa.com/text-box');
  const fullNameInput = page.locator('#userName');
  await expect(fullNameInput).toBeVisible();

  await fullNameInput.click();
  await page.keyboard.type('Parvath');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Shift+Tab');
  await page.keyboard.press('Control+A'); // Use 'Meta+A' on Mac
  await page.keyboard.type('J');

  await expect(fullNameInput).toHaveValue('J');

  // 7. Upload a File
  await page.goto('https://the-internet.herokuapp.com/upload');
  await expect(page.locator('h3')).toHaveText('File Uploader');

  const filePath = path.resolve(__dirname, 'test_upload.txt');
  await page.setInputFiles('input[type="file"]', filePath);
  await page.click('input[type="submit"]');

  await expect(page.locator('h3')).toHaveText('File Uploaded!');
  await expect(page.locator('#uploaded-files')).toHaveText('test_upload.txt');

  // 8. Scroll to an Element
  await page.goto('https://the-internet.herokuapp.com/large');
  const targetRow = page.locator('table tr:last-child');
  await targetRow.scrollIntoViewIfNeeded();
  await expect(targetRow).toBeVisible();
});
