/// <reference types="cypress" />
import linkMenu from '../../constants/constants';
import { el } from '../../elements/elements'

class HomePage {
    go(rota) {
        cy.visit(rota)
    }

    validAccessHome() {
        cy.get(el.carouselHome)
            .should('be.visible')
    }

    logged(name) {
        cy.get(el.logguedIn)
            .last()
            .should('be.visible')
            .contains(name)
    }

    logOut() {
        cy.contains(linkMenu.LOGOUT)
            .should('be.visible')
            .click()
    }

    subscription(email) {
        cy.get(el.inputSubscription).scrollIntoView()
            .type(email)

        cy.get(el.btnSubscribe)
            .click()
    }

    subscribed(msg) {
        cy.get(el.msgSubscribed)
            .should('have.text', msg)
    }

    addProducts() {
        cy.get(el.addToCart)
            .first()
            .click()

        cy.get(el.btnContinueShopping)
            .should('be.visible')
            .click()
    }
}

export default new HomePage()