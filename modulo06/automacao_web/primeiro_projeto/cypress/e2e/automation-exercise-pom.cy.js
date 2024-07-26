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
    beforeEach(() => {
        homePage.go('/')
        homePage.validAccessHome()
    })

    it('Test Case 1: Register User', () => {
        cy.fixture('newuser').then(function(newUser) {
            const userData = newUser

            menu.clickOn(linkMenu.SIGNUP)
            login.validLoginPage('login')
            login.newUser(name, email)

            register.newUserForm(userData)
            register.succedRegister('Account Created!')
        })
    })

    it('Test Case 2: Login User with correct email and password', () => {
        menu.clickOn(linkMenu.SIGNUP)
        login.validLoginPage('login')
        login.logIn('Erwin_Grimes86@yahoo.com', "123456")
        homePage.logged()
    })

    it('Test Case 3: Login User with incorrect email and password', () => {
        menu.clickOn(linkMenu.SIGNUP)
        login.validLoginPage('login')
        login.logIn("Erwin_Grimes861@yahoo.com", "12345")
        login.incorrectLogIn('Your email or password is incorrect!')
    })
})