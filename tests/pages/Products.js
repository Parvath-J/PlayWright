// pages/Cart.js
import { test,expect } from '@playwright/test';

export class Products {
  constructor(page) {
    this.page = page;
    // General locators
    this.product1 = page.locator('#add-to-cart-sauce-labs-backpack');
    this.product2 = page.locator('#add-to-cart-sauce-labs-bike-light');
   this.cart = page.locator('.shopping_cart_link');
    //this.checkOut = page.locator('#checkout');
   
  }

  async goToCart() {
    await this.cart.click();
   
  }
  async addProducts(){
    await this.product1.click();
    await this.product2.click();
  }
  

//   async goToCheckout() {
//     await this.checkOut.click();
//   }

//   async productCount() {
//   return await this.cartList.count();
//   }


}