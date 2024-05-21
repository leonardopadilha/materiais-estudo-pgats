import { $ } from '@wdio/globals'
import ListaDeProdutosPage from './listaDeProdutos.page.js'

export default class LoginPage {
    get inputUsuario() { 
        return $('android=new UiSelector().packageName("com.example.lojinha").className("android.widget.EditText").instance(0)')
    }

    get inputSenha() { 
       return $('android=new UiSelector().resourceId("senha")')
    }
    
    get btnEntrar() {
       return $('android=new UiSelector().text("ENTRAR")')
    }

    async login(usuario, senha) {
        await this.inputUsuario.setValue(usuario)
        await this.inputSenha.setValue(senha)
    }

    async loginComFluentPage(usuario, senha) {
        await Promise.all([
            this.inputUsuario.setValue(usuario),
            this.inputSenha.setValue(senha)
        ])
        await this.clickBtnEntrar()
        return new ListaDeProdutosPage()
    }

    async clickBtnEntrar() {
        await this.btnEntrar.click()
    }
}
