import { $, expect } from '@wdio/globals'

export default class ListaDeProdutosPage {
    get lblListaProdutos() {
        return $('android=new UiSelector().packageName("com.example.lojinha").text("Lista de Produtos")')
    }

    async obterTextoLblListaDeProdutos() {
        return await this.lblListaProdutos.getText()
    }

    async validaLoginNaLojinha(mensagem) {
        expect(await this.obterTextoLblListaDeProdutos()).toEqual(mensagem)
    }
}
