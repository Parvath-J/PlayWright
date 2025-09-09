const { test, expect } = require('@playwright/test');

test('Assertions and Waits on Test Automation Practice', async ({ page }) => {
  await page.waitForTimeout(1000);

  // Navigate and validate URL & title
  await page.goto('https://testautomationpractice.blogspot.com/?view=classic');
  await expect(page).toHaveURL(/.*testautomationpractice/);
  await expect(page).toHaveTitle(/Automation Testing Practice/);

  // Wait for form elements to appear
  await page.waitForSelector('#name');
  await page.waitForTimeout(1000); // Fixed wait (use sparingly)

  // .toBeVisible() and .toBeHidden()
  const nameInput = page.locator('#name');
  await expect(nameInput).toBeVisible();

  const hiddenElement = page.locator('#nonExistentElement'); // Simulated hidden
  await expect(hiddenElement).toBeHidden();

  // .toBeInViewport()
  await expect(nameInput).toBeInViewport();

  // .toHaveText() and .toContainText()
  const nameLabel = page.getByText('Name:');
  await expect(nameLabel).toHaveText('Name:');


  // .toHaveValue()
  await nameInput.fill('Samsung');
  await expect(nameInput).toHaveValue('Samsung');

  // .toHaveAttribute()
  await expect(nameInput).toHaveAttribute('type', 'text');

  // .toHaveClass()
  await expect(nameInput).toHaveClass(/.*form-control.*/); // Adjust based on actual class

  // .toBeEnabled() / .toBeDisabled()
  await expect(nameInput).toBeEnabled();

  // .toBeChecked()
  const maleRadio = page.locator('input[value="male"]');
  await maleRadio.check();
  await expect(maleRadio).toBeChecked();

  // page.waitForFunction()
  await page.waitForFunction(() => document.querySelector('#name').value === 'Samsung');

  // page.waitForResponse()
  const [response] = await Promise.all([
    page.waitForResponse(res =>
        res.status() == 200
    ),
    await page.locator('#Wikipedia1_wikipedia-search-input').click(),
  await page.locator('#Wikipedia1_wikipedia-search-input').fill('Samsung'),
  await page.locator('input[type="submit"]').click()
  ])
  //console.log(await response.json());

  // page.waitForNavigation()
  await Promise.all([
    page.waitForNavigation(),
    page.click('a:text("Home")') // Simulate navigation
  ]);
});