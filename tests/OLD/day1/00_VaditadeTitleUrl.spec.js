import {test, expect} from "@playwright/test";

test('Validate page title and URL', async ({page}) => {
    //to go to the url
    await page.goto('https://www.hollandandbarrett.com/');

    const actualTitle = await page.title();
    console.log();

    const acutalURL = page.url();
    console.log();

    const expectedTitle = "Holland & Barrett - UK's Leading Health & Wellbeing Store";
    const expectedURL = "https://www.hollandandbarrett.com/";

    expect(actualTitle).toBe(expectedTitle);
    expect(acutalURL).toBe(expectedURL);
}
)

test('Validate page title and URL1', async ({page}) => {
    //to go to the url
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    const actualTitle = await page.title();
    console.log();

    const acutalURL = page.url();
    console.log();

    const expectedTitle = "Test Login | Practice Test Automation";
    const expectedURL = "https://practicetestautomation.com/practice-test-login/";

    expect(actualTitle).toBe(expectedTitle);
    expect(acutalURL).toBe(expectedURL);
}
)

test('Validate page title and URL2', async ({page}) => {
    //to go to the url
    await page.goto('https://playwright.dev/');

    const actualTitle = await page.title();
    console.log();

    const acutalURL = page.url();
    console.log();

    const expectedTitle = "Fast and reliable end-to-end testing for modern web apps | Playwright";
    const expectedURL = "https://playwright.dev/";

    expect(actualTitle).toBe(expectedTitle);
    expect(acutalURL).toBe(expectedURL);
}
)

test('Validate page title and URL3', async ({page}) => {
    //to go to the url
    await page.goto('https://demoblaze.com/');

    const actualTitle = await page.title();
    console.log();

    const acutalURL = page.url();
    console.log();

    const expectedTitle = "STORE";
    const expectedURL = "https://demoblaze.com/";

    expect(actualTitle).toBe(expectedTitle);
    expect(acutalURL).toBe(expectedURL);
}
)
