/// <reference types="cypress" />
import { el } from '../../elements/elements'

class HomePage {
    go(rota) {
        cy.visit(rota)
    }

    validAccessHome() {
        cy.get(el.carouselHome)
            .should('be.visible')
    }
}

export default new HomePage()