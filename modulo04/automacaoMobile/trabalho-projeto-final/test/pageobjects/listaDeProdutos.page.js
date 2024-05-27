import { $, expect } from '@wdio/globals'
import element from '../elements/listaDeProdutos_element.js'

export default class ListaDeProdutosPage {
    get productListElement() {
        return $(element.list.productList)
    }

    async getProductListText() {
        return await this.productListElement.getText()
    }

    async accessProductListScreen(mensagem) {
        expect(await this.getProductListText()).toEqual(mensagem)
    }

    get trashbutton() {
        return $(element.button.trash)
    }

    async clickOnTrashButton() {
        await this.trashbutton.click()
    }

    get addProduct() {
        return $(element.button.addProduct)
    }

    async clickOnAddProduct() {
        await this.addProduct.click()
    }

    async confirmDeleteWithSuccess() {
        expect(await this.trashbutton).not.toBeExisting()
    }



}
