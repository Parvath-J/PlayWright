//Lab 1: First Script & Basic Navigation

import {test, expect} from "@playwright/test";

test('Check Title', async ({page}) => {

    await page.goto('https://playwright.dev');

    const title = await page.title();
    console.log("Page title is:", title);

    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

