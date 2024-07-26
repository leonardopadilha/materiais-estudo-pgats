import { el } from '../../elements/elements'

class LoginPage {
    validLoginPage(url) {
        cy.url()
            .should('include', url)
    }

    newUser(name, email) {
        cy.get(el.inputName).type(name)
        cy.get(el.inputEmail).type(email)
        cy.get(el.btnSignup).click()
    }
}

export default new LoginPage()