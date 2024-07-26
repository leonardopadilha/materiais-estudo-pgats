import { el } from '../../elements/elements'

class LoginPage {
    validLoginPage() {
        cy.url()
            .should('include', 'login')
    }

    newUser(name, email) {
        cy.get(el.inputName).type(name)
        cy.get(el.inputEmail).type(email)
        cy.get(el.btnSignup).click()
    }
}

export default new LoginPage()