const { expect } = require('@playwright/test')

class CadastroPage {
    constructor(page) {
        this.page = page
    }

    async nome(nome) {
        await this.page.getByPlaceholder('Nome').fill(nome)
    }

    async telefone(telefone) {
        await this.page.getByPlaceholder('Telefone').fill(telefone)
    }

    async email(email) {
        await this.page.locator('#email').fill(email)
    }

    async senha(senha) {
        await this.page.getByPlaceholder('Senha').fill(senha)
    }

    async novoUsuario(usuario) {
        await this.nome(usuario.nome)
        await this.telefone(usuario.telefone)
        await this.email(usuario.email)
        await this.senha(usuario.senha)
    }

    async clickOnCadastrar() {
        await this.page.getByRole('button', { name: /Cadastrar/i}).click()
    }

    async cadastroSucesso(mensagem) {
        const frase = await this.page.locator('#successModal .modal-body')
        await expect(frase).toContainText(mensagem)
        await this.page.getByRole('button', { name: /ok/i}).click()
    }

    async verificarTabela(conteudo) {
        const tabela = await this.page.locator('#userList td:nth-child(3)')
        await expect(tabela).toContainText(conteudo)
    }

    async clickOnExcluir() {
        await this.page.getByRole('Button', { name: 'Excluir'}).click()
    }

    async confirmarExclusao(mensagem) {
        const frase = await this.page.locator('#confirmDeleteModal .modal-body')
        await expect(frase).toContainText(mensagem)
        await this.page.locator('#confirmDeleteModal .modal-footer button:nth-child(2)').click()
    }

    async verificaExclusaoComSucesso(mensagem) {
        const frase = await this.page.locator('#deleteSuccessModal .modal-body')
        await expect(frase).toContainText(mensagem)
        await this.page.getByRole('Button', { name: /ok/i }).click()
    }

    async verificarExclusaoEmailTabela() {
        const dados = this.page.locator('#userList td:nth-child(3)')
        await expect (dados).toHaveCount(0);
    }
} 

module.exports = {
    CadastroPage
}