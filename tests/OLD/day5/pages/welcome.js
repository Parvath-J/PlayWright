// pages/HomePage.js
import {test, expect } from '@playwright/test';

export class welcome {
  constructor(page) {
    this.page = page;
    this.productsLink = page.locator('a[href="/products"]');
    this.logo = page.locator('.logo img'); // adjust selector if needed
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com/');
  }

  async goToProductsPage() {
    await this.productsLink.click();
  }

  async isOnHomePage() {
    await expect(this.logo).toBeVisible();
  }
}
