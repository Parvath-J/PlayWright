import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
  console.log("Opened the website");
 
  await page.locator('text=Name:');
  //await page.locator('text=Name').locator('input').fill('mohith');
  await page.locator('text=Name:').locator('input').fill('mohith');
  console.log("text selector");
  await page.locator('#practiceForm > div:nth-child(3) > label');
  console.log("css selector");
 
 
 
  await page.locator('//*[@id="practiceForm"]/div[4]/label').click();
  console.log("xpath selector");
 
});