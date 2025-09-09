// pages/ProductsPage.js
import { test,expect } from '@playwright/test';

export class ProductsPage {
  constructor(page) {
    this.page = page;
    // General locators
    this.allProductsHeading = page.locator('h2:has-text("All Products")');
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.searchedProductsHeading = page.locator('h2:has-text("Searched Products")');
    this.productsList = page.locator('.features_items .productinfo p');
    
    // First product locators
    this.firstProduct = page.locator('.features_items .product-image-wrapper').first();
   this.addToCartButton = this.firstProduct.locator('a:has-text("Add to cart")').first();

    this.viewProductBtn = this.firstProduct.locator('a:has-text("View Product")');

    // Modal
    this.successModal = page.locator('#cartModal .modal-content');
    this.continueShoppingBtn = page.locator('.btn.btn-success.close-modal');

    // Product details
    this.productName = page.locator('.product-information h2');
    this.productCategory = page.locator('.product-information p:has-text("Category")');
    this.productPrice = page.locator('.product-information span span');
    this.productAvailability = page.locator('.product-information p:has-text("Availability")');
  }

  async verifyOnProductsPage() {
    await expect(this.page).toHaveURL(/\/products/);
    await expect(this.allProductsHeading).toBeVisible();
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async verifySearchResultsContain(productName) {
    await expect(this.searchedProductsHeading).toBeVisible();
    const products = await this.productsList.allTextContents();
    for (let product of products) {
      expect(product.toLowerCase()).toContain(productName.toLowerCase());
    }
  }

  async addFirstProductToCart() {
    await this.firstProduct.hover();
    await this.addToCartButton.click();
    await expect(this.successModal).toBeVisible();
    await this.continueShoppingBtn.click();
    await expect(this.successModal).toBeHidden();
  }

  async viewFirstProductDetails() {
    await this.viewProductBtn.click();
    await expect(this.page).toHaveURL(/product_details/);
  }

  async verifyProductDetails() {
    await expect(this.productName).toBeVisible();
    await expect(this.productCategory).toBeVisible();
    await expect(this.productPrice).toBeVisible();
    await expect(this.productAvailability).toBeVisible();
  }
}
