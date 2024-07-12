/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Automation Exercise', () => {
    it('Test Case 1: Cadastrar usuário', () => {
        const email = faker.internet.email()

        cy.visit('https://www.automationexercise.com/')

        //cy.get('[href$=login]').click()
        cy.contains(' Signup').click()
        
        cy.get('[data-qa="signup-name"]').type('qa-automation-leo')
        cy.get('[data-qa="signup-email"]').type(email)
        cy.contains('button', 'Signup').click()
        //cy.get('[data-qa="signup-button"]').click()

        cy.get('[type=radio]')
            .should('be.visible')
                .check('Mr')

        //cy.get('[type=radio]').first().check()
        //cy.get('[type=radio]').last().check()
        //cy.get('[type=radio]').eq(1).check()
                
        cy.get('[name=password]')
            .should('be.visible')
                .type('123456', { log: false }) // Não exibe a senha digitada no log

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

        cy.get('#newsletter')
            .check()

        cy.get('#optin')
            .check()

        cy.get('#first_name')
            .type('Automation Tester')

        cy.get('#last_name')
            .type('qa-automation-leo')

        cy.get('[data-qa="company"]')
            .type('Automation Tester')

        cy.get('[name="address1"]')
            .type('Address 1')
        
        cy.get('[name="address2"]')
            .type('Address 2')

        cy.get('#country')
            .select('New Zealand')
            .invoke('val')
            .should('deep.equal', 'New Zealand')

        cy.get('[name="state"]')
            .type('State of Test')

        cy.get('[data-qa="city"]')
            .type('City of Test')

        cy.get('[data-qa="zipcode"]')
            .type('12345')

        cy.get('.login-form #mobile_number')
            .type('1234567890')

        cy.findByRole('button', { name: /Create Account/i })
            .click()

        cy.url()
            .should('include', 'account_created')

        cy.get('.title.text-center')
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).to.be.equal('Account Created!')
            })
    });
});