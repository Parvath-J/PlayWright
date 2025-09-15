import { test, expect } from '@playwright/test';
export class LoginSwag {

    constructor(page) {
        this.page = page;
        // Locators for the login page elements
        this.logo = page.locator('.login_logo');
        this.passwordInput = page.getByPlaceholder('Password');
        this.userName = page.locator('#user-name');
        this.loginButton = page.locator('#login-button');


    }
    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    async userLogin(name, password) {
        await this.userName.fill(name);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }

}