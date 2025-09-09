// tests/products.spec.js
import { test,expect } from '@playwright/test';
import { welcome } from './pages/welcome.js';
import { ProductsPage } from './pages/ProductsPage.js';

test.describe('Automation Exercise - Products Page Scenarios', () => {
  test('End-to-End Product Flow', async ({ page }) => {
    const homePage = new welcome(page);
    const productsPage = new ProductsPage(page);

    // 1. Navigate to Home -> Products
    await homePage.navigate();
    await homePage.goToProductsPage();
    await productsPage.verifyOnProductsPage();

    // 2. Search for a product
    await productsPage.searchProduct('Blue Top');
    await productsPage.verifySearchResultsContain('Blue Top');

    // 3. Add product to cart
    await productsPage.addFirstProductToCart();

    // 4. View product details
    await productsPage.viewFirstProductDetails();
    await productsPage.verifyProductDetails();

    // 5. Go back to Home Page
    await page.goBack();
    await homePage.isOnHomePage();
  });
});
