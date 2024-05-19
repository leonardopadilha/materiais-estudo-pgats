const { expect } = require('@wdio/globals')

describe('Lojinha App', () => {
    it('Realizar login na lojinha', async () => {
        // Arrange (Preparação)
        const usuario = 'admin2'
        const senha = 'admin'
        const inputUsuario = $('android=new UiSelector().packageName("com.example.lojinha").className("android.widget.EditText").instance(0)')
        const inputSenha = $('android=new UiSelector().resourceId("senha")')
        const btnLogin = $('android=new UiSelector().text("ENTRAR")')
        const lblListaProdutos = $('android=new UiSelector().packageName("com.example.lojinha").text("Lista de Produtos")')
        

        // Act (Ação)
        // Espera explícita
        //await driver.pause(5000) --> 5 segundos = Não se deve fazer no código
        // Espera implícita
        await inputUsuario.waitForDisplayed()
        await inputSenha.waitForDisplayed()

        await inputUsuario.setValue(usuario)
        await inputSenha.setValue(senha)
        await btnLogin.click()

        await lblListaProdutos.waitForDisplayed()
        
        // Assert (Assertiva)
        const listaDeProduto = await lblListaProdutos.getText()
        expect(listaDeProduto).toEqual('Lista de Produtos')
    })
})

