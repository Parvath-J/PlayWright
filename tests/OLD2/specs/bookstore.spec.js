const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../../pages/HomePage');
//const { allure } = require('allure-playwright');

test('Intermediate Assesment', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate();
  await expect(homePage.bookStoreHeader).toBeVisible();

  await homePage.searchForBook('Understanding ECMAScript 6');
  await expect(homePage.firstBookTitle).toHaveText('Understanding ECMAScript 6');

  await homePage.firstBookTitle.click();
  await expect(page).toHaveURL(/\/books\?book=/);

  await page.screenshot({ path: 'book-detail.png', fullPage: true });
});