import { el } from '../../elements/elements'

class RegisterPage {

    #title(title) {
        cy.get(el.titleUser)
            .should('be.visible')
                .check(title)
    }

    #createPassword() {
        cy.get('[name=password]')
            .should('be.visible')
                .type('123456', { log: false })
    }

    #dateOfBirthday(day, month, year) {
        cy.get('[data-qa="days"]')
            .select(day)
            .invoke('val')
            .should('deep.equal', day)

    cy.get('[name="months"]')
            .select(month)
            .invoke('val')
            .should('deep.equal', '10')

    cy.get('[data-qa="years"]')
            .select(year)
            .invoke('val')
            .should('deep.equal', year)
    }

    #confirmNewsletter(answer) {
        if (answer == 'yes') {
            cy.get('#newsletter')
                .check()
        }
    }
    #receiveOffers(answer) {
        if (answer == 'yes') {
            cy.get('#optin')
                .check()
        }
    }

    #fistName(firstName) {
        cy.get('#first_name')
            .type(firstName)
    }

    #lastName(lastName) {
        cy.get('#last_name')
            .type(lastName)
    }

    #company(company) {
        cy.get('[data-qa="company"]')
            .type(company)
    }

    #firstAddress(address) {
        cy.get('[name="address1"]')
            .type(address)
    }

    #secondAddress(address) {
        cy.get('[name="address2"]')
            .type(address)
    }

    #country(country) {
        cy.get('#country')
            .select(country)
            .invoke('val')
            .should('deep.equal', country)
    }

    #location(state, city, zipcode) {
        cy.get('[name="state"]')
            .type(state)

        cy.get('[data-qa="city"]')
            .type(city)

        cy.get('[data-qa="zipcode"]')
            .type(zipcode)
    }

    #phoneNumber(phoneNumber) {
        cy.get('.login-form #mobile_number')
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