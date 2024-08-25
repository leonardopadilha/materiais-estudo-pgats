/// <reference types="cypress" />
import { el } from '../../elements/elements'

class RegisterPage {

    #title(title) {
        cy.get(el.titleUser)
            .should('be.visible')
                .check(title)
    }

    #createPassword() {
        cy.get(el.inputPassword)
            .should('be.visible')
                .type('123456', { log: false })
    }

    #dateOfBirthday(day, month, year) {
        cy.get(el.birthDay)
            .select(day)
            .invoke('val')
            .should('deep.equal', day)

    cy.get(el.birthMonth)
            .select(month)
            .invoke('val')
            .should('deep.equal', '10')

    cy.get(el.birthYear)
            .select(year)
            .invoke('val')
            .should('deep.equal', year)
    }

    #confirmNewsletter(answer) {
        if (answer == 'yes') {
            cy.get(el.newsletter)
                .check()
        }
    }
    #receiveOffers(answer) {
        if (answer == 'yes') {
            cy.get(el.offers)
                .check()
        }
    }

    #fistName(firstName) {
        cy.get(el.inpFirstName)
            .type(firstName)
    }

    #lastName(lastName) {
        cy.get(el.inpLastName)
            .type(lastName)
    }

    #company(company) {
        cy.get(el.company)
            .type(company)
    }

    #firstAddress(address) {
        cy.get(el.address1)
            .type(address)
    }

    #secondAddress(address) {
        cy.get(el.address2)
            .type(address)
    }

    #country(country) {
        cy.get(el.selectCountry)
            .select(country)
            .invoke('val')
            .should('deep.equal', country)
    }

    #location(state, city, zipcode) {
        cy.get(el.inpState)
            .type(state)

        cy.get(el.inpCity)
            .type(city)

        cy.get(el.inpZipcode)
            .type(zipcode)
    }

    #phoneNumber(phoneNumber) {
        cy.get(el.mobile)
            .type(phoneNumber)
    }

    
    newUserForm(user) {
        this.#title(user.title)
        this.#createPassword(user.password)
        this.#dateOfBirthday(user.birth.day, user.birth.month, user.birth.year)
        this.#confirmNewsletter(user.newsletter)
        this.#receiveOffers(user.offers)
        this.#fistName(user.firstName)
        this.#lastName(user.lastName)
        this.#company(user.company)
        this.#firstAddress(user.address)
        this.#secondAddress(user.address2)
        this.#country(user.country)
        this.#location(user.state, user.city, user.zipcode)
        this.#phoneNumber(user.mobile)
        this.#confirmRegister()
    }

    #confirmRegister() {
        cy.findByRole('button', { name: /create Account/i })
            .click()
    }

    succedRegister(msg) {
        cy.url()
            .should('include', el.accountCreated)

        cy.get(el.msgAccountCreated)
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).to.be.equal(msg)
            })
    }

    clickOnContinue() {
        cy.get(el.btnContinue)
            .click()
    }
}

export default new RegisterPage()