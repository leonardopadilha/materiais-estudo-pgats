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
}

export default new RegisterPage()