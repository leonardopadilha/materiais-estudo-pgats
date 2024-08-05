/// <reference types="cypress" />
import { el } from '../../elements/elements'

class DetailsPage {
    #deliveryAddress(titleAddress, name, company, street, street2, addressCompleted, country, mobile) {
        cy.get(el.addressTitle)
            .contains(titleAddress)

        cy.get(el.addressFirstAndLastName)
            .should('contain', name)

        cy.get(el.addressCompanyName)
            .first()
            .should('have.text', company)

        cy.get(el.addressStreet)
            .eq(1)
            .should('have.text', street)

        cy.get(el.addressStreet)
            .eq(2)
            .should('have.text', street2)

        cy.get(el.addressCity)
            .should('be.visible', addressCompleted)

        cy.get(el.addressCountry)
            .should('have.text', country)

        cy.get(el.addressPhone)
            .should('have.text', mobile)
    }

    #billingAddress(titleBilling, name, company, street, street2, addressCompleted, country, mobile) {
        cy.get(el.billingTitle)
            .last()
            .should('have.text', titleBilling)

        cy.get(el.billingFirstAndLastName)
            .should('contain', name)

        cy.get(el.billingCompanyName)
            .first()
            .should('have.text', company)

        cy.get(el.billingStreet)
            .eq(1)
            .should('have.text', street)

        cy.get(el.billingStreet)
            .eq(2)
            .should('have.text', street2)

        cy.get(el.billingCity)
            .should('be.visible', addressCompleted)

        cy.get(el.billingCountry)
            .should('have.text', country)

        cy.get(el.billingPhone)
            .should('have.text', mobile)
    }

    #reviewOrder() {
        cy.get(el.menuTable)
            .should('be.visible')
            .and('have.length', 6)

        cy.get(el.productTable)
            .should('be.visible')
            .and('have.length', 5)
            .and('not.be.empty')

        cy.contains('Total Amount')
            .should('be.visible')

        cy.get(el.totalAmount)
            .first()
            .should('be.visible')
            .and('not.be.empty')

        cy.get(el.totalAmount)
            .last()
            .should('be.visible')
            .and('not.be.empty')
    }
    
    checkOut(titleAddress, user, titleBilling) {
        this.#deliveryAddress(
            titleAddress, 
            user.name, 
            user.company, 
            user.address, 
            user.address2, 
            user.addressCompleted,
            user.country,
            user.mobile
        )
        this.#billingAddress(
            titleBilling,
            user.name, 
            user.company, 
            user.address, 
            user.address2, 
            user.addressCompleted,
            user.country,
            user.mobile
        )

        this.#reviewOrder()
    }

    comment(order) {
        cy.get(el.comment)
            .should('be.visible')
            .type(order.comment)

        cy.get(el.btnPlaceOrder)
            .click()
    }


}

export default new DetailsPage()