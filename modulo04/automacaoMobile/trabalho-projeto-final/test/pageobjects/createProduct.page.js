import { $, expect } from '@wdio/globals'
import element from '../elements/createProductsScreen_elements'

export default class CreateProductPage {

    get titleAddProduct() {
        return $(element.title.addProduct)
    }

    get titleEditProduct() {
        return $(element.title.editProduct)
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
        return $(element.button.saveComponent)
    }

    get returnToProductList() {
        return $(element.button.returnToProductList)
    }

    get inputComponentName() {
        return $(element.input.componentName)
    }

    get inputComponentQuantity() {
        return $(element.input.componentQuantity)
    }

    get buttonTrash() {
        return $(element.component.trash)
    }

    async getTitleAddProduct() {
        return await this.titleAddProduct.getText() 
    }

    async verifyTitleAddProduct() {
        expect(await this.getTitleAddProduct()).toEqual("Adicionar produto ")
    }

    async getTitleEditProduct() {
        return await this.titleEditProduct.getText()
    }

    async verifyTitleEditProduct() {
        expect(await this.getTitleEditProduct()).toEqual('Editar produto ')
    }

    async existButtonTrash() {
        await this.buttonTrash.waitForDisplayed({ timeout: 5000 })
    }
    async createProduct(productName, productValue, productColors) {
        await this.inputProductName.setValue(productName)
        await this.inputProductValue.setValue(productValue)
        await this.inputProductColors.setValue(productColors)
    }

    async clickOnSaveProduct() {
        await this.buttonSaveProduct.click()
    }

    async clickOnReturnToProductList() {
        await this.returnToProductList.click()
    }

    async clickOnAddComponent() {
        await this.buttonAddComponent.click()
    }

    async clickOnSaveComponent() {
        await this.buttonSaveComponent.click()
    }

    async createComponent(componentName, componentQuantity) {
        await this.inputComponentName.setValue(componentName)
        await this.inputComponentQuantity.setValue(componentQuantity)
    }

    async confirmRegisterComponent() {
        expect(await this.existButtonTrash()).toBeExisting()
    }
}