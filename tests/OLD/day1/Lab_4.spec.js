//Lab 4: Multiple Navigations in One Test

import {test, expect} from "@playwright/test";

test('Multiple Navigation', async ({page}) => {

    await page.goto('https://playwright.dev');
    const Title1 = await page.title();
    console.log('Title of Page1: ', Title1);

    await page.goto('https://www.wikipedia.org/');
    const Title2 = await page.title();
    console.log('Title of Page2: ', Title2);

    await page.goto('https://www.google.com');
    const Title3 = await page.title();
    console.log('Title of Page3: ', Title3);
})