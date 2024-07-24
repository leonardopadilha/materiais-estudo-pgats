/// <reference types="cypress" />

class HomePage {
    go(rota) {
        cy.visit(rota)
    }

    validAccessHome() {
        cy.get('#slider-carousel .carousel-inner')
            .should('be.visible')
    }
}

export default new HomePage()