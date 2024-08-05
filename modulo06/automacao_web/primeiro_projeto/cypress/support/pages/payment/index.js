/// <reference types="cypress" />
import linkMenu from '../../constants/constants';
import { el } from '../../elements/elements'

class PaymentPage {
    creditCard(name, number, cvc, month, year) {
        cy.get(el.paymentTitle)
            .should('have.text', 'Payment')

        cy.get(el.ccdName)
            .type(name)

        cy.get(el.ccdNumber)
            .type(number)

        cy.get(el.ccdCvc)
            .type(cvc)

        cy.get(el.ccdExpireMonth)
            .type(month)

        cy.get(el.ccdExpireYear)
            .type(year)

        cy.get(el.btnPayOrder)
            .click()
    }

    orderPlaced(msg) {
        cy.get(el.titleOrderPlaced)
            .should('contain', 'Order Placed!')

        cy.get(el.msgOrderConfirmed)
            .should('contain', msg)
    }
}

export default new PaymentPage()