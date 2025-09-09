import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';
import { join } from 'path';
 
test('Advanced Web Interactions - Complete Test Suite', async ({ page }) => {
  // Set longer timeout for this comprehensive test
  test.setTimeout(300000); // 5 minutes
 
  console.log('=== ADVANCED WEB INTERACTIONS TEST SUITE STARTED ===\n');
 
  // ============================================================================
  // 1. SETUP AND NAVIGATION - ALERTS DEMO PAGE
  // ============================================================================
  console.log('1. SETUP AND NAVIGATION - ALERTS DEMO PAGE');
  console.log('==========================================');
 
  // Navigate to the Alerts demo page
  await page.goto('https://demoqa.com/alerts', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);
 
  // Verification Point: Assert that the page title is correct or main header is visible
  await expect(page.getByRole('heading')).toContainText('Alerts');
  console.log('✓ Navigation to Alerts page successful');
  console.log('✓ Page header verification passed\n');
 
  // ============================================================================
  // 2. HANDLE ALL TYPES OF ALERTS
  // ============================================================================
  console.log('2. HANDLE ALL TYPES OF ALERTS');
  console.log('=============================');
 
  // Verify all alert sections are present
  await expect(page.locator('#javascriptAlertsWrapper')).toContainText('Click Button to see alert');
  await expect(page.locator('#alertButton')).toContainText('Click me');
  await expect(page.locator('#javascriptAlertsWrapper')).toContainText('On button click, alert will appear after 5 seconds');
  await expect(page.locator('#timerAlertButton')).toContainText('Click me');
  await expect(page.locator('#javascriptAlertsWrapper')).toContainText('On button click, confirm box will appear');
  await expect(page.locator('#confirmButton')).toContainText('Click me');
  await expect(page.locator('#javascriptAlertsWrapper')).toContainText('On button click, prompt box will appear');
  await expect(page.locator('#promtButton')).toContainText('Click me');
 
  // ============================================================================
  // 2.1. SIMPLE ALERT
  // ============================================================================
  console.log('2.1. SIMPLE ALERT');
  console.log('=================');
 
  console.log('🚨 About to trigger simple alert...');
  await page.waitForTimeout(2000); // Pause to see the button before clicking
 
  // Set up dialog handler before clicking the button
  page.once('dialog', async dialog => {
    console.log(`Alert message: ${dialog.message()}`);
    expect(dialog.message()).toBe('You clicked a button');
    await dialog.accept();
    console.log('✓ Simple alert accepted');
  });
 
  // Click the button that triggers a simple alert
  await page.locator('#alertButton').click();
  await page.waitForTimeout(2000); // Pause to see the alert was handled
 
  // Verification Point: After dismissal, verify that the button is still present and visible
  await expect(page.locator('#alertButton')).toBeVisible();
  console.log('✓ Simple alert handled successfully');
  console.log('✓ Button visibility verification passed\n');
 
  // ============================================================================
  // 2.2. TIMED ALERT (5 seconds)
  // ============================================================================
  console.log('2.2. TIMED ALERT (5 seconds)');
  console.log('============================');
 
  console.log('⏰ About to trigger timed alert (5 seconds)...');
  await page.waitForTimeout(2000); // Pause to see the button before clicking
 
  // Set up dialog handler for timed alert
  page.once('dialog', async dialog => {
    console.log(`Timed alert message: ${dialog.message()}`);
    expect(dialog.message()).toBe('This alert appeared after 5 seconds');
    await dialog.accept();
    console.log('✓ Timed alert accepted');
  });
 
  // Click the button that triggers a timed alert
  await page.locator('#timerAlertButton').click();
  await page.waitForTimeout(7000); // Wait for 5 seconds + 2 seconds to see the alert
 
  // Verification Point: After dismissal, verify that the button is still present and visible
  await expect(page.locator('#timerAlertButton')).toBeVisible();
  console.log('✓ Timed alert handled successfully');
  console.log('✓ Button visibility verification passed\n');
 
  // ============================================================================
  // 2.3. CONFIRMATION ALERT (OK)
  // ============================================================================
  console.log('2.3. CONFIRMATION ALERT (OK)');
  console.log('============================');
 
  console.log('❓ About to trigger confirmation alert (OK)...');
  await page.waitForTimeout(2000); // Pause to see the button before clicking
 
  // Set up dialog handler for confirmation alert (OK)
  page.once('dialog', async dialog => {
    console.log(`Confirmation message: ${dialog.message()}`);
    expect(dialog.message()).toBe('Do you confirm action?');
    await dialog.accept();
    console.log('✓ Confirmation alert accepted (OK)');
  });
 
  // Click the button that triggers a confirmation alert
  await page.locator('#confirmButton').click();
  await page.waitForTimeout(2000); // Pause to see the confirmation was handled
 
  // Verification Point: Verify that a message appears confirming the choice
  await expect(page.locator('#confirmResult')).toContainText('You selected Ok');
  console.log('✓ Confirmation alert (OK) handled successfully');
  console.log('✓ Confirmation message verification passed\n');
 
  // ============================================================================
  // 2.4. CONFIRMATION ALERT (CANCEL)
  // ============================================================================
  console.log('2.4. CONFIRMATION ALERT (CANCEL)');
  console.log('================================');
 
  console.log('❌ About to trigger confirmation alert (CANCEL)...');
  await page.waitForTimeout(2000); // Pause to see the button before clicking
 
  // Set up dialog handler for confirmation alert (CANCEL)
  page.once('dialog', async dialog => {
    console.log(`Confirmation message: ${dialog.message()}`);
    expect(dialog.message()).toBe('Do you confirm action?');
    await dialog.dismiss();
    console.log('✓ Confirmation alert dismissed (CANCEL)');
  });
 
  // Click the button that triggers a confirmation alert again
  await page.locator('#confirmButton').click();
  await page.waitForTimeout(2000); // Pause to see the confirmation was handled
 
  // Verification Point: Verify that a message appears confirming the choice
  await expect(page.locator('#confirmResult')).toContainText('You selected Cancel');
  console.log('✓ Confirmation alert (CANCEL) handled successfully');
  console.log('✓ Confirmation message verification passed\n');
 
  // ============================================================================
  // 2.5. PROMPT ALERT (with text input)
  // ============================================================================
  console.log('2.5. PROMPT ALERT (with text input)');
  console.log('===================================');
 
  console.log('📝 About to trigger prompt alert with text input...');
  await page.waitForTimeout(2000); // Pause to see the button before clicking
 
  // Set up dialog handler for prompt alert
  page.once('dialog', async dialog => {
    console.log(`Prompt message: ${dialog.message()}`);
    expect(dialog.message()).toBe('Please enter your name');
    await dialog.accept('hii');
    console.log('✓ Prompt alert accepted with text: hii');
  });
 
  // Click the button that triggers a prompt alert
  await page.locator('#promtButton').click();
  await page.waitForTimeout(2000); // Pause to see the prompt was handled
 
  // Verification Point: Verify that a message appears with the entered text
  await expect(page.locator('#promptResult')).toContainText('You entered hii');
  console.log('✓ Prompt alert handled successfully');
  console.log('✓ Prompt message verification passed\n');
 
  // ============================================================================
  // 3. NAVIGATE AND INTERACT WITHIN A FRAME
  // ============================================================================
  console.log('3. NAVIGATE AND INTERACT WITHIN A FRAME');
  console.log('======================================');
 
  // Navigate to the Nested Frames page
  await page.goto('https://demoqa.com/nestedframes', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);
 
  // Verification Point: Verify you are on the correct page
  await expect(page.getByRole('heading')).toContainText('Nested Frames');
  console.log('✓ Navigation to Nested Frames page successful');
 
  // Verify the page content
  await expect(page.locator('#framesWrapper')).toContainText('Sample Nested Iframe page. There are nested iframes in this page. Use browser inspecter or firebug to check out the HTML source. In total you can switch between the parent frame and the nested child frame.');
 
  console.log('🖼️  Starting frame interactions...');
  await page.waitForTimeout(2000); // Pause to see the frames page
 
  // Switch to the parent frame and extract text content
  const parentFrame = page.frameLocator('#frame1');
  const parentFrameText = parentFrame.locator('body');
  await expect(parentFrameText).toBeVisible();
 
  const parentText = await parentFrameText.textContent();
  console.log(`Parent frame text: ${parentText}`);
 
  // Verification Point: Assert that the extracted text matches expected text
  expect(parentText).toContain('Parent frame');
  console.log('✓ Parent frame text verification passed');
 
  // Click on parent frame text
  await page.locator('#frame1').contentFrame().getByText('Parent frame').click();
  console.log('✓ Clicked on parent frame text');
  await page.waitForTimeout(2000); // Pause to see parent frame content
 
  console.log('🖼️  Switching to child frame...');
  await page.waitForTimeout(2000); // Pause before switching to child frame
 
  // Switch to the child frame nested within the parent frame
  const childFrame = parentFrame.frameLocator('iframe');
  const childFrameText = childFrame.locator('html');
  await expect(childFrameText).toBeVisible();
 
  const childText = await childFrameText.textContent();
  console.log(`Child frame text: ${childText}`);
 
  // Verification Point: Assert that the text within the child frame is correct
  expect(childText).toContain('Child Iframe');
  console.log('✓ Child frame text verification passed');
 
  // Click on child frame html element
  await page.locator('#frame1').contentFrame().locator('iframe').contentFrame().locator('html').click();
  console.log('✓ Clicked on child frame html element');
  await page.waitForTimeout(2000); // Pause to see child frame content
  console.log('✓ Frame interactions completed successfully\n');
 
  // ============================================================================
  // 4. PERFORM COMPLEX MOUSE ACTIONS
  // ============================================================================
  console.log('4. PERFORM COMPLEX MOUSE ACTIONS');
  console.log('================================');
 
  // Navigate to the mouse actions practice page
  await page.goto('https://vinothqaacademy.com/mouse-event/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);
 
  // Verification Point: Verify the page has loaded by checking for unique elements
  await expect(page.locator('#header')).toContainText('Home');
  await expect(page.locator('#header')).toContainText('Selenium Java Online Training');
  await expect(page.locator('#header')).toContainText('Self Paced Video Course');
  await expect(page.locator('#header')).toContainText('Tutorials');
  console.log('✓ Mouse actions page loaded successfully');
 
  // Verify the mouse actions sections are present
  await expect(page.locator('#main')).toContainText('Mouse Actions - Double Click');
  await expect(page.locator('#dblclick')).toContainText('Double Click Me');
  await expect(page.locator('#main')).toContainText('Mouse Actions - Right Click or Context Click');
  await expect(page.locator('#rightclick')).toContainText('Right Click Me');
  await expect(page.locator('#main')).toContainText('Mouse Actions - Tooltip');
  await expect(page.locator('#main')).toContainText('Move the mouse over the text box:');
 
  console.log('🖱️  Starting Double-Click action...');
  await page.waitForTimeout(2000); // Pause to see the button before action
 
  // Double-Click action
  await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
  await page.waitForTimeout(3000); // Pause to see the result
 
  // Verification Point: Verify that an action was completed
  await expect(page.locator('#demo')).toContainText('Double Click Action is Performed');
  console.log('✓ Double-click action performed and verified');
 
  console.log('🖱️  Starting Right-Click action...');
  await page.waitForTimeout(2000); // Pause before right-click
 
  // Right-Click action
  await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right' });
  await page.waitForTimeout(3000); // Pause to see the context menu
 
  // Verification Point: Verify that the context menu appears
  await expect(page.locator('#myDiv')).toContainText('Registration Form');
  await expect(page.locator('#myDiv')).toContainText('Alert Popup');
  await expect(page.locator('#myDiv')).toContainText('Mouse Event');
  console.log('✓ Right-click action performed and context menu verified');
 
  console.log('🖱️  Starting Mouse Hover action...');
  await page.waitForTimeout(2000); // Pause before hover
 
  // Mouse Hover action
  await page.locator('//*[@id="header"]/div[2]/div/div/div[3]/div[2]/div[2]/ul/li[5]/a').hover();
  await page.waitForTimeout(3000); // Pause to see the hover effect
 
  // Verification Point: Verify that a tooltip or new element becomes visible
  await expect(page.locator('#header')).toContainText('Demo Sites');
  await expect(page.locator('#header')).toContainText('E-Commerce Demo Application');
  await expect(page.locator('#header')).toContainText('Practice Automation');
  console.log('✓ Mouse hover action performed and tooltip verified');
  console.log('✓ Complex mouse actions completed successfully\n');
 
  // ============================================================================
  // 5. EXECUTE ADVANCED KEYBOARD INPUTS
  // ============================================================================
  console.log('5. EXECUTE ADVANCED KEYBOARD INPUTS');
  console.log('==================================');
 
  // Navigate to the Text Box demo page
  await page.goto('https://demoqa.com/text-box', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);
 
  // Verification Point: Verify the "Full Name" input field is visible
  await expect(page.getByRole('heading')).toContainText('Text Box');
  await expect(page.locator('#userName-label')).toContainText('Full Name');
  await expect(page.getByRole('textbox', { name: 'Full Name' })).toBeEmpty();
  console.log('✓ Text Box page loaded successfully');
 
  console.log('⌨️  Starting keyboard input sequence...');
  await page.waitForTimeout(2000); // Pause to see the form before interaction
 
  // Focus on the "Full Name" input field
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.waitForTimeout(1000);
 
  // Type first name
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Kunaljit');
  console.log('✓ First name typed');
  await page.waitForTimeout(2000); // Pause to see the typed text
 
  // Press Tab to move to the next field (Email)
  await page.getByRole('textbox', { name: 'Full Name' }).press('Tab');
  console.log('✓ Tab pressed to move to Email field');
  await page.waitForTimeout(1500); // Pause to see focus change
 
  // Press Shift+Tab to move back to the "Full Name" field
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Shift+Tab');
  console.log('✓ Shift+Tab pressed to return to Full Name field');
  await page.waitForTimeout(1500); // Pause to see focus return
 
  // Use Ctrl+A (or Meta+A on Mac) to select all text
  await page.getByRole('textbox', { name: 'Full Name' }).press('Control+a');
  console.log('✓ Ctrl+A pressed to select all text');
  await page.waitForTimeout(5000); // Pause to see text selection
 
  // Type last name, replacing the selected first name
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Roy');
  console.log('✓ Last name typed, replacing first name');
  await page.waitForTimeout(2000); // Pause to see the final result
 
  // Verification Point: Verify that the "Full Name" field only contains the last name
  await expect(page.getByRole('textbox', { name: 'Full Name' })).toHaveValue('Roy');
  console.log('✓ Full Name field contains only last name: "Roy"');
  console.log('✓ Advanced keyboard inputs completed successfully\n');
 
  // ============================================================================
  // 6. UPLOAD A FILE
  // ============================================================================
  console.log('6. UPLOAD A FILE');
  console.log('===============');
 
  // Create a test file for upload
  const testFileName = 'demo.txt';
  const testFileContent = 'This is a test file for Playwright upload testing.\nCreated at: ' + new Date().toISOString();
  const testFilePath = join(process.cwd(), testFileName);
 
  // Write the test file
  writeFileSync(testFilePath, testFileContent);
  console.log(`✓ Test file created: ${testFileName}`);
  await page.waitForTimeout(1000); // Pause to see file creation message
 
  // Navigate to the file upload page
  await page.goto('https://the-internet.herokuapp.com/upload', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);
 
  // Verification Point: Verify the page header "File Uploader" is visible
  await expect(page.getByRole('heading')).toContainText('File Uploader');
  await expect(page.getByRole('paragraph')).toContainText('Choose a file on your system and then click upload. Or, drag and drop a file into the area below.');
  await expect(page.getByRole('button', { name: 'Choose File' })).toBeEmpty();
  await expect(page.locator('#file-submit')).toContainText('Upload');
  console.log('✓ File upload page loaded successfully');
 
  console.log('📁 About to upload file...');
  await page.waitForTimeout(2000); // Pause to see the upload form
 
  // Upload the file using the file input element
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles(testFilePath);
  console.log('✓ File selected for upload');
  await page.waitForTimeout(2000); // Pause to see file selection
 
  // Verify the file is selected
  await expect(page.getByRole('button', { name: 'Choose File' })).toHaveValue('C:\\fakepath\\demo.txt');
 
  console.log('🚀 About to submit file upload...');
  await page.waitForTimeout(2000); // Pause before submitting
 
  // Click the submit button to complete the upload
  await page.getByRole('button', { name: 'Upload' }).click();
  console.log('✓ Submit button clicked');
  await page.waitForTimeout(3000); // Pause to see upload processing
 
  // Verification Point: Verify that the page displays a success message and filename
  await expect(page.getByRole('heading')).toContainText('File Uploaded!');
  await expect(page.locator('#uploaded-files')).toContainText('demo.txt');
  console.log('✓ File upload successful');
  console.log('✓ Upload verification passed');
 
  // Clean up the test file
  try {
    const fs = require('fs');
    fs.unlinkSync(testFilePath);
    console.log('✓ Test file cleaned up');
  } catch (error) {
    console.log('Note: Test file cleanup failed, but test passed');
  }
  console.log('✓ File upload completed successfully\n');
 
  // ============================================================================
  // 7. SCROLL TO AN ELEMENT
  // ============================================================================
  console.log('7. SCROLL TO AN ELEMENT');
  console.log('======================');
 
  // Navigate to the page with a large DOM
  await page.goto('https://the-internet.herokuapp.com/large', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);
 
  // Verification Point: Verify that the page contains a table with many rows
  await expect(page.locator('#content')).toContainText('Table');
  await expect(page.locator('body')).toContainText('Large & Deep DOM Some pages have very large and deeply nested page layouts, which can trigger odd rendering issues and test performance bottlenecks (depending on your locator strategy). These examples are nested 50 levels deep.');
  console.log('✓ Large DOM page loaded successfully');
 
  console.log('📜 Starting scroll demonstration...');
  await page.waitForTimeout(2000); // Pause to see the initial page state
 
  // Locate the specific element at the bottom of the page (last table row)
  const lastRow = page.locator('#large-table tbody tr').last();
  await expect(lastRow).toBeVisible();
 
  // Get the text content of the last row before scrolling
  const lastRowText = await lastRow.textContent();
  console.log(`Target element text: ${lastRowText}`);
 
  console.log('⬇️  Scrolling to the bottom element...');
  await page.waitForTimeout(2000); // Pause before scrolling
 
  // Use scrolling method to bring this element into view
  await lastRow.scrollIntoViewIfNeeded();
  console.log('✓ Scrolled to target element');
  await page.waitForTimeout(3000); // Pause to see the scrolled position
 
  // Verification Point: Verify that the target element is visible within the viewport
  await expect(lastRow).toBeInViewport();
  console.log('✓ Target element is visible in viewport');
 
  console.log('🖱️  Clicking the target element...');
  await page.waitForTimeout(2000); // Pause before clicking
 
  // Additional verification: Try to interact with the element
  await lastRow.click();
  console.log('✓ Successfully clicked the target element');
  console.log('✓ Scrolling to element completed successfully\n');
 
  // ============================================================================
  // FINAL SUMMARY
  // ============================================================================
  console.log('=== ADVANCED WEB INTERACTIONS TEST SUITE COMPLETED ===');
  console.log('All test sections completed successfully:');
  console.log('✓ 1. Setup and Navigation - Alerts Demo Page');
  console.log('✓ 2. Handle All Types of Alerts (Simple, Timed, Confirmation OK/Cancel, Prompt)');
  console.log('✓ 3. Navigate and Interact within Frames');
  console.log('✓ 4. Perform Complex Mouse Actions');
  console.log('✓ 5. Execute Advanced Keyboard Inputs');
  console.log('✓ 6. Upload a File');
  console.log('✓ 7. Scroll to an Element');
  console.log('\n🎉 ALL VERIFICATION POINTS PASSED! 🎉');
  console.log('The test script ran from start to finish without manual intervention.');
});
 