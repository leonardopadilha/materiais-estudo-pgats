import { el } from '../../elements/elements'

class RegisterPage {
    validAccessMenuRegister() {
        cy.get(el.formRegisterNewUser)
            .then(message => {
                expect(message.text()).eq('New User Signup!')
            })
    }

    regiserNewUser(name, email) {
        cy.get(el.inputName).type(name)
        cy.get(el.inputEmail).type(email)
        cy.get(el.btnSignup).click()
    }
}

export default new RegisterPage()