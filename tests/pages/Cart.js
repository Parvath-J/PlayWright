// pages/Cart.js
import { test,expect } from '@playwright/test';

export class Cart {
  constructor(page) {
    this.page = page;
    // General locators
    this.continueShopping = page.locator('#continue-shopping');
    this.cartIcon = page.locator('#shopping_cart_container > a');
    this.cartList = page.locator('.cart_item');
    this.checkOut = page.locator('#checkout');
   
  }

  async goToContinueShopping() {
    await this.continueShopping.click();
   
  }

  async goToCheckout() {
    await this.checkOut.click();
  }

  async productCount() {
  return await this.cartList.count();
  }


}