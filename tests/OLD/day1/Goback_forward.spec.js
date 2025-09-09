import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {

  // Navigate to the Sauce Demo login page
  await page.goto('https://www.saucedemo.com/');
 
  // Click on the login credentials section (repeated clicks may be unnecessary)
  await page.locator('[data-test="login-credentials"]').click();
  await page.locator('[data-test="login-credentials"]').click();
  await page.locator('[data-test="login-credentials"]').click();
 
  // Scroll down the page to bring elements into view
  await page.locator('body').press('PageDown');
 
  // Click on the login form area
  await page.locator('form').click();
 
  // Double-click the username input field to highlight any existing text
  await page.locator('[data-test="username"]').dblclick();
 
  // Fill in the username
  await page.locator('[data-test="username"]').fill('standard_user');
 
  // Click on the password input field
  await page.locator('[data-test="password"]').click();
 
  // Fill in the password
  await page.locator('[data-test="password"]').fill('secret_sauce');
 
  // Click the login button to submit the form
  await page.locator('[data-test="login-button"]').click();
 
  // Add the "Sauce Labs Backpack" item to the cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
 
  // Click on the "Sauce Labs Bolt T-Shirt" item to view its details
  await page.getByText('Sauce Labs Bolt T-ShirtGet').click();
 
  // Add the "Sauce Labs Bolt T-Shirt" to the cart
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
 
  // Click on the shopping cart icon to view the cart
  await page.locator('[data-test="shopping-cart-link"]').click();
 
  // Click on the checkout button to begin the checkout process
  await page.locator('[data-test="checkout"]').click();
});