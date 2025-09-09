//Lab 2: Verify Website Title

import { test, expect } from "@playwright/test";

test('Check Title', async ({ page }) => {

    await page.goto('https://www.wikipedia.org/');

    const currentURL = await page.url();
    console.log("Page URl is : ", currentURL);

    await expect(page).toHaveTitle("Wikipeda");

})