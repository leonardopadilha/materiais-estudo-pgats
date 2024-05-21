import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Lojinha App', () => {
    it('Realizar login na lojinha', async () => {
        const usuario = 'admin2'
        const senha = 'admin'

        const loginPage = new LoginPage()
        
        await (
            await loginPage
                    .loginComFluentPage(usuario, senha))
            .validaLoginNaLojinha('Lista de Produtos')        
    })
})

