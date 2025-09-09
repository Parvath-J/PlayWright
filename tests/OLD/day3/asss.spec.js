const { test, expect, chromium } = require('@playwright/test');
 
test('Advanced locators using GitHub example', async () => {
  console.log('Starting advanced locators using GitHub example...');
 
  const browser = await chromium.launch({ headless: false, slowMo: 150 });
  const page = await browser.newPage();
 
  const response = await page.goto('https://github.com/search');
  console.log('1. Navigated to GitHub Search');
 
  // Check for 429 error
  if (response.status() === 429) {
    console.warn('⚠️ Received 429 Too Many Requests. Reloading...');
    await page.reload({ waitUntil: 'domcontentloaded' });
  }
 
  // Chained selectors
  const searchInput = await page.$('main >> input[type="text"]');
  await searchInput.fill('playwright');
 
  await page.getByRole('textbox', { name: 'Search GitHub' }).press('Enter');
  await page.waitForTimeout(8000);
 
  // Check again after search
  const postSearchResponse = await page.reload();
  if (postSearchResponse.status() === 429) {
    console.warn('⚠️ Received 429 after search. Reloading again...');
    await page.reload({ waitUntil: 'domcontentloaded' });
  }
 
  console.log('2. Typed search query and searched using chained selector');
 
  // XPath selector
  const xpathSelector = await page.$('xpath=/html/body/div[1]/div[6]/main/react-app/div/div/div[1]/div/div/div[2]/div/div/div[1]/div[4]/div/div/div[1]/div/div[1]/h3/div/div[2]/a/span');
  if (xpathSelector) {
    await xpathSelector.click();
  }
 
  // :has() selector
  const repoWithDescription = await page.$$('.hide-sm.hide-md:has(p)');
  console.log(`3. Found ${repoWithDescription.length} repos with descriptions`);
 
  // Filter elements by text content
  const py = await page.$$('a:has-text("Python")');
  console.log(`4. Found Python link(s): ${py.length}`);
 
  // Get attribute values
  const repoHeadLink = await page.$('a.d-block.overflow-x-hidden.color-fg-default');
  if (repoHeadLink) {
    const repoUrl = await repoHeadLink.getAttribute('href');
    console.log('5. First repo URL:', repoUrl ? `https://github.com${repoUrl}` : 'Not found');
  }
 
  await page.waitForTimeout(5000);
  await browser.close();
  console.log('✅ Advanced locators example completed');
});
 