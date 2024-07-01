const { expect } = require('@playwright/test')

class LoginPage {
    constructor(page) {
        this.page = page
    }

    async visit(url) {
        await this.page.goto(url);
        await expect(this.page).toHaveTitle(/Login/);
    }

    async login(user, password) {
        await this.page.locator("#username").fill(user)
        await this.page.locator("#password").fill(password)
        await this.page.locator('[type="submit"]').click()
    }

    async expectLoginSuccess() {
        await expect(this.page).toHaveTitle(/TL Content/);
    }
}

module.exports = {
    LoginPage
}