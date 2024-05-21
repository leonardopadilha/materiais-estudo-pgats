import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ListaDeProdutosPage from '../pageobjects/listaDeProdutos.page.js'

describe('Lojinha App', () => {
    it('Realizar login na lojinha', async () => {
        // Arrange (Preparação)
        const usuario = 'admin2'
        const senha = 'admin'

        const loginPage = new LoginPage()
        const listaDeProdutosPage = new ListaDeProdutosPage()
        
        // Act (Ação)
        await loginPage.login(usuario, senha)
        await loginPage.clickBtnEntrar()
        
        // Assert (Assertiva)
        const listaDeProduto = await listaDeProdutosPage.obterTextoLblListaDeProdutos()
        expect(listaDeProduto).toEqual('Lista de Produtos')
    })
})

