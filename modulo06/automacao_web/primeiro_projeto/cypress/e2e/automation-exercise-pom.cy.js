/// <reference types="cypress" />

import homePage from '../support/pages/home'
import menu from '../support/components'
import linkMenu from '../support/constants/constants'
import register from '../support/pages/register'
import login from '../support/pages/login'
import user from '../support/users/createUser'
import contactUs from '../support/pages/contactUs'
import productPage from '../support/pages/products'
import cartPage from '../support/pages/cart'
import detailsPage from '../support/pages/checkout'
import paymentPage from '../support/pages/payment'

const name = user.name()
const email = user.email()

describe('#Automation Exercise', () => {
    beforeEach(() => {
        homePage.go('/')
        homePage.validAccessHome()
    })

    context('Register user', () => {
        it('Test Case 1: Register User', () => {
            cy.fixture('newUser').then(function(newUser) {
                const userData = newUser
    
                menu.clickOn(linkMenu.SIGNUP)
                login.validLoginPage('login')
                login.newUser(name, email)
    
                register.newUserForm(userData)
                register.succedRegister('Account Created!')
            })
        })

        it('Test Case 5: Register User with existing email', () => {
            menu.clickOn(linkMenu.SIGNUP)
            login.validLoginPage('login')
            login.newUser(name, 'Erwin_Grimes86@yahoo.com')
            login.emailAlready('Email Address already exist!')
        })

        it('Test Case 15: Place Order: Register before Checkout', () => {

            const ccdNumber = '1111'
            const ccdCVC = '1111'
            const ccdExpireMonth = '12'
            const ccdExpireYear = '2050'

            const newEmail = user.email()

            cy.fixture('newUser').then(function(newUser) {
                const userData = newUser
    
                menu.clickOn(linkMenu.SIGNUP)
                login.validLoginPage('/login')
                login.newUser(name, newEmail)
    
                register.newUserForm(userData)
                register.succedRegister('Account Created!')
                register.clickOnContinue()
                
                homePage.logged(name)
                homePage.addProducts()

                menu.clickOn(linkMenu.CART)
                cartPage.validProductPage('/view_cart')
                cartPage.clickOnProceedToCheckout()
                detailsPage.checkOut('Your delivery address', userData, 'Your billing address')
            })

            cy.fixture('order').then(function(order) {
                const commentProduct = order

                detailsPage.comment(commentProduct)
            })

            paymentPage.creditCard(name, ccdNumber, ccdCVC, ccdExpireMonth, ccdExpireYear)
            paymentPage.orderPlaced('Congratulations! Your order has been confirmed!')
        })
    })

    context('Login user', () => {
        it('Test Case 2: Login User with correct email and password', () => {
            menu.clickOn(linkMenu.SIGNUP)
            login.validLoginPage('login')
            login.logIn('Erwin_Grimes86@yahoo.com', "123456")
            homePage.logged('Cora Halvorson Sr')
        })
    
        it('Test Case 3: Login User with incorrect email and password', () => {
            menu.clickOn(linkMenu.SIGNUP)
            login.validLoginPage('/login')
            login.logIn("Erwin_Grimes861@yahoo.com", "12345")
            login.incorrectLogIn('Your email or password is incorrect!')
        })

        it('Test Case 4: Logout User', () => {
            menu.clickOn(linkMenu.SIGNUP)
            login.validLoginPage('/login')
            login.logIn('Erwin_Grimes86@yahoo.com', "123456")
            homePage.logged('Cora Halvorson Sr')
            homePage.logOut()
            login.validLoginPage('/login')
        })
    })

    context('Contact us', () => {
        it('Test Case 6: Contact Us Form', () => {
            cy.fixture('contact').then(function(contact) {
                const contactData = contact
    
                menu.clickOn(linkMenu.CONTACT_US)
                contactUs.validAccessContectUs('/contact_us')
                contactUs.contactForm(contactData)
                contactUs.uploadFile('anexo.json')
                contactUs.clickOnSubmitForm()
                contactUs.submittedForm('Success! Your details have been submitted successfully.')
            })
        })
    })

    context('Products', () => {
        it('Test Case 8: Verify All Products and product detail page', () => {
            menu.clickOn(linkMenu.PRODUCTS)
            productPage.validProductPage('/products')
            productPage.viewProducts()
            productPage.checkProduct()
        })

        it('Test Case 9: Search Product', () => {
            menu.clickOn(linkMenu.PRODUCTS)
            productPage.validProductPage('/products')
            productPage.searchFor('shirt')
            productPage.listSearchedProducts('Searched Products')
            productPage.viewProducts()
        })
    })

    context('Subscribe', () => {
        it('Test Case 10: Verify Subscription in home page', () => {
            homePage.subscription(email)
            homePage.subscribed('You have been successfully subscribed!')
        })
    })
})