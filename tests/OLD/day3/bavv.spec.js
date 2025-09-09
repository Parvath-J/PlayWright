import { test, expect } from '@playwright/test';
test.setTimeout(120000); 
test('test', async ({ page }) => {

//handlealert

   //  Navigate to the Alerts demo page
  await page.goto('https://demoqa.com/alerts');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`); // Log the alert message
    dialog.dismiss().catch(() => {}); // Dismiss the alert safely
  });
   //  Trigger the alert by clicking the "Click me" button
  await page.locator('#alertButton').click();
   // Step 4: Verification point
  await expect(page.locator('#alertButton')).toBeVisible();

//handleconfirmation - Handle Confirmation Alert - Accept OK

  await page.goto('https://demoqa.com/alerts');
  // Attach the listener BEFORE triggering the dialog
  page.once('dialog', async dialog => {
    console.log('Dialog message:', dialog.message());
    await dialog.accept(); // ✅ Click OK
  });
  // Trigger the confirmation alert
  await page.locator('#confirmButton').click();

  // Verify the result message
  await expect(page.locator('#confirmResult')).toHaveText('You selected Ok');

//Scroll to element in large DOM — with step-by-step assertions

  await page.goto('https://the-internet.herokuapp.com/large');
  //  Table exists & visible
  const table = page.locator('table#large-table');
  await expect(table).toBeVisible();
  //  Table has many rows (sanity check)
  const rows = table.locator('tbody tr');
  const rowCount = await rows.count();
  //  Locate target element (last row) and assert it's not in viewport before scroll
  const lastRow = rows.last();
  const inViewportBefore = await lastRow.evaluate((el) => {
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return r.top >= 0 && r.bottom <= vh;
  });
  expect(inViewportBefore).toBe(false);
  //  Scroll into view (action)
  await lastRow.scrollIntoViewIfNeeded();
  //  Assert the element is visible (Playwright visibility check)
  await expect(lastRow).toBeVisible();
  // Assert the element is inside the viewport (coordinate check)
  const inViewportAfter = await lastRow.evaluate((el) => {
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return r.top >= 0 && r.bottom <= vh;
  });
  expect(inViewportAfter).toBe(true);
  //  Assert the element is not obscured (elementFromPoint test)
  const notObscured = await lastRow.evaluate((el) => {
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const topEl = document.elementFromPoint(cx, cy);
    // true if the element itself or one of its children is at the center point
    return topEl === el || el.contains(topEl);
  });

//uploadfile

    //  Navigate to the file upload demo page
  await page.goto('https://the-internet.herokuapp.com/upload');
   //  Verify page heading "File Uploader" is visible
  await expect(page.getByRole('heading', { name: 'File Uploader' })).toBeVisible();
   // Create the path to the test file (make sure test_upload.txt exists in your project root)
  await page.getByRole('button', { name: 'Choose File' }).click();
    //  Upload the file using the <input type="file"> element
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('"C:\AscendionPlaywrightt\tests\test_upload.txt"');
    //  Click on the "Upload" button
  await page.getByRole('button', { name: 'Upload' }).click();
   //  (Verification Point): Check that the uploaded file name is displayed on the page
  await expect(page.locator('#uploaded-files')).toContainText('test_upload.txt');

});