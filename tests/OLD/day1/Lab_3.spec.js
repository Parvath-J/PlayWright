//Lab 3: Navigate and Verify URL

import {test, expect} from "@playwright/test";

test('Verify URL', async ({page}) => {

    await page.goto('https://www.google.com', {timeout: 60000});

    await expect(page).toHaveURL('https://www.google.com/');
    console.log("Success: URL is Correct.");
})