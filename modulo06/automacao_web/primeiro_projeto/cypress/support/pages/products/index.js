/// <reference types="cypress" />
import { el } from '../../elements/elements'

class ProductsPage {
    validProductPage(url) {
        cy.url()
            .should('include', url)
    }

    viewProducts() {
        cy.get(el.productList)
            .should('be.visible')
            .and('have.length.at.least', 1)
            .first()
            .parent()
            .contains('View Product')
            .click()
    }

    checkProduct() {
        cy.get(el.productTitle)
            .should('be.visible')

        cy.get(el.productInformations)
            .should('be.visible')
            .and('have.length', 4)

        cy.get(el.productValue)
            .should('be.visible')
    }

    searchFor(product) {
        cy.get(el.searchProduct)
            .type(product)

        cy.get(el.btnSearchProduct)
            .click()
    }

    listSearchedProducts(msg) {
        cy.get(el.titleSearchedProducts)
            .should('have.text', msg)
    }
}

export default new ProductsPage()