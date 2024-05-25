import { $, expect } from '@wdio/globals'
import element from '../elements/createProductsScreen_elements'

export default class CreateProductPage {
    get titleAddProduct() {
        return $(element.title.addProduct)
    }

    get inputProductName() {
        return $(element.input.productName)
    }

    get inputProductValue() {
        return $(element.input.productValue)
    }

    get inputProductColors() {
        return $(element.input.productColors)
    }

    get buttonSaveProduct() {
        return $(element.button.saveProduct)
    }

    get buttonAddComponent() {
        return $(element.button.addComponent)
    }

    get buttonSaveComponent() {
        return $(element.button.saveComponentScroll)
    }

    get inputComponentName() {
        return $(element.input.componentName)
    }

    get inputComponentQuantity() {
        return $(element.input.componentQuantity)
    }

    get titleEditProduct() {
        return $(element.title.editProduct)
    }

    async getPageTitle() {
        await this.titleAddProduct.getText()
    }

    async verifyPageTitle() {
        expect(await this.getPageTitle()).toEqual('Adicionar Produto')
    }

    async createProductWithComponent(productName, productValue, productColors, componentName, componentQuantity) {
        await this.inputProductName.setValue(productName)
        await this.inputProductValue.setValue(productValue)
        await this.inputProductColors.setValue(productColors)

        await this.buttonSaveProduct.click()
        await this.buttonAddComponent.click()

        await this.inputComponentName.setValue(componentName)
        await this.inputComponentQuantity.setValue(componentQuantity)

        await this.buttonSaveComponent.click()
    }
}