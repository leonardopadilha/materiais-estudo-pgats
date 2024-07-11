const { expect } = require('@playwright/test')

class ConteudoPage {
    constructor(page) {
        this.page = page
    }

    async titulo(titulo) {
        await this.page.locator('#title').fill(titulo)
    }

    async descricao(descricao) {
        await this.page.locator('#description').fill(descricao)
    }

    async selecionarTipoTeste(opcao) {
        const selecao = await this.page.locator('#inputGroupSelect02')
        await selecao.selectOption({ value: opcao })
    }

    async conteudo(conteudo) {
        await this.page.locator('#content').fill(conteudo)
    }

    async clickCadastrar() {
        await this.page.getByRole('button', { name: /cadastrar/i}).click()
    }

    async confirmarCadastro(frase) {
        const mensagem = await this.page.locator('#successModal .modal-body')
        await expect(mensagem).toContainText(frase)
        await this.page.getByRole('button', { name: /ok/i}).click()
    }

    async exibeCadastro(titulo) {
        await this.page.waitForLoadState('networkidle')
        const tabela = await this.page.locator('#conteudoList td:first-child')
        await expect(tabela).toContainText(titulo)
    }

    async conteudoDeletetado() {
        await this.page.waitForLoadState('networkidle')
        const td = await this.page.locator('#conteudoList td:first-child')
        await expect(td).toHaveCount(0);
    }
}

module.exports = {
    ConteudoPage
}