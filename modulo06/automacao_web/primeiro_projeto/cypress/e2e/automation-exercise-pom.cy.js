/// <reference types="cypress" />

import homePage from '../support/pages/home'
import menu from '../support/components'
import linkMenu from '../support/constants/constants'
import register from '../support/pages/register'
import login from '../support/pages/login'
import user from '../support/users/createUser'

const name = user.name()
const email = user.email()

describe('#Register a new user', () => {
    before(() => {
        homePage.go('/')
        homePage.validAccessHome()
    })

    it('Test Case 1: Register User', () => {

        cy.fixture('newuser').then(function(newUser) {
            const userData = newUser

            menu.clickOn(linkMenu.SIGNUP)
            login.validLoginPage()

            login.newUser(name, email)
            register.newUserForm(userData)
            register.confirmRegister()
            register.succedRegister()
        })
    })
})