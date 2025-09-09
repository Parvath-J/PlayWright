//Lab 1: First Script & Basic Navigation

import {test, expect} from "@playwright/test";

test('Check Title', async ({page}) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    await page.locator('/html/body/main/div/div/div[2]/form/div[4]/label');
    await page.locator('body > main > div > div > div.col-md-8.col-lg-8.col-xl-8 > h1');
    await page.locator('.btn-primary').click();
    await page.locator('#practiceForm > div:nth-child(5) > label');
    await page.locator('.col-form-label').get;
});
