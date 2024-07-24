/// <reference types="cypress" />

import linkMenu from '../constants/constants';
import { el } from '../elements/elements'

class Menu {
    clickOn(link) {
        switch(link) {
            case linkMenu.HOME: 
                cy.contains(el.home).click()
                break;

            case linkMenu.PRODUCTS: 
                cy.contains(el.products).click()
                break;

            case linkMenu.CART: 
                cy.contains(el.cart).click()
                break;

                case linkMenu.SIGNUP: 
                    cy.get(el.signup).click()
                break;

            case linkMenu.LOGOUT: 
                cy.contains(el.logout).click()
                break;

            case linkMenu.DELETE_ACCOUNT: 
                cy.contains(el.deleteAccount).click()
                break;

            case linkMenu.CONTACT_US: 
                cy.contains(el.contactUs).click()
                break;
        }
        
    }
}

export default new Menu()