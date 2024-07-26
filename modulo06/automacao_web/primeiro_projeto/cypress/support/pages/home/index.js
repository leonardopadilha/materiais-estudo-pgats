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

    logged() {
        cy.contains(linkMenu.LOGOUT)
            .should('be.visible')
    }
}

export default new HomePage()