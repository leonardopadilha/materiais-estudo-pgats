/// <reference types="cypress" />

import linkMenu from '../constants/constants';
import { el } from '../elements/elements'

class Menu {
    clickOn(link) {
        switch(link) {
            case linkMenu.HOME: 
                cy.contains(el.home).should('be.visible').click()
                break;

            case linkMenu.PRODUCTS: 
                cy.contains(el.products).should('be.visible').click()
                break;

            case linkMenu.CART: 
                cy.contains(el.cart).should('be.visible').click()
                break;

                case linkMenu.SIGNUP: 
                    cy.get(el.signup).should('be.visible').click()
                break;

            case linkMenu.LOGOUT: 
                cy.contains(el.logout).should('be.visible').click()
                break;

            case linkMenu.DELETE_ACCOUNT: 
                cy.contains(el.deleteAccount).should('be.visible').click()
                break;

            case linkMenu.CONTACT_US: 
                cy.contains(el.contactUs).should('be.visible').click()
                break;
        }
        
    }
}

export default new Menu()