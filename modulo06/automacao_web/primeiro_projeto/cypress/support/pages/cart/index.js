/// <reference types="cypress" />
import { el } from '../../elements/elements'

class CartPage {
    validProductPage(url) {
        cy.url()
            .should('include', url)
    }

    clickOnProceedToCheckout() {
        cy.get(el.btnProceedToCheckout)
            .should('be.visible')
            .click()
    }
}

export default new CartPage()