import { el } from '../../elements/elements'

class RegisterPage {
    validAccessMenuRegister() {
        cy.get(el.formRegisterNewUser)
            .then(message => {
                expect(message.text()).eq('New User Signup!')
            })
    }

    registerNewUser(name, email) {
        cy.get(el.inputName).type(name)
        cy.get(el.inputEmail).type(email)
        cy.get(el.btnSignup).click()
    }

    title(title) {
        cy.get(el.titleUser)
        .should('be.visible')
            .check(title)
    }

    createPassword() {
        cy.get('[name=password]')
        .should('be.visible')
            .type('123456', { log: false })
    }

    dateOfBirthday() {
        cy.get('[data-qa="days"]')
        .select('15')
        .invoke('val')
        .should('deep.equal', '15')

    cy.get('[name="months"]')
        .select('October')
        .invoke('val')
        .should('deep.equal', '10')

    cy.get('[data-qa="years"]')
        .select('1925')
        .invoke('val')
        .should('deep.equal', '1925')
    }

    confirmNewsletter(answer) {
        if (answer == 'sim') {
            cy.get('#newsletter')
                .check()
        }
    }
    receiveOffers(answer) {
        if (answer == 'sim') {
            cy.get('#optin')
            .check()
        }
    }

    fistName(firstName) {
        cy.get('#first_name')
            .type(firstName)
    }

    lastName(lastName) {
        cy.get('#last_name')
            .type(lastName)
    }

    company(company) {
        cy.get('[data-qa="company"]')
            .type(company)
    }

    firstAddress(address) {
        cy.get('[name="address1"]')
            .type(address)
    }

    secondAddress(address) {
        cy.get('[name="address2"]')
            .type(address)
    }

    country(country) {
        cy.get('#country')
            .select(country)
            .invoke('val')
            .should('deep.equal', country)
    }

    location(state, city, zipCode) {
        cy.get('[name="state"]')
            .type(state)

        cy.get('[data-qa="city"]')
            .type(city)

        cy.get('[data-qa="zipcode"]')
            .type(zipCode)
    }

    phoneNumber(phoneNumber) {
        cy.get('.login-form #mobile_number')
            .type(phoneNumber)
    }

    confirmRegister() {
        cy.findByRole('button', { name: /Create Account/i })
            .click()
    }

    succedRegister() {
        cy.url()
            .should('include', 'account_created')

        cy.get('.title.text-center')
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).to.be.equal('Account Created!')
            })
    }








}

export default new RegisterPage()