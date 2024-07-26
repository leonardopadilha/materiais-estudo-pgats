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

    logIn(email, password) {
        cy.get(el.logInEmail)
            .type(email)

        cy.get(el.logInPassword)
            .type(password)

        cy.get(el.logInBtnconfirm)
            .click()
    }

    incorrectLogIn(msg) {
        cy.get(el.msgincorrectLogIn)
            .should('contain', msg)
    }

}

export default new LoginPage()