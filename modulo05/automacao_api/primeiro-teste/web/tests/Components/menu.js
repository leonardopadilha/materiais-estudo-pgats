const { expect } = require('@playwright/test')

export class Menu {
    constructor(page) {
        this.page = page
    }

    async selectCadastro(option) {
        await this.page.locator('#navbarDropdown').click()
        await this.page.locator('.dropdown-item', { hasText: option }).click()
    }

    async acessarTelaComSucesso(title) {
        await expect(this.page).toHaveTitle(title)
        //await this.page.pause()
    }
}