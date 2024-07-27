import { el } from '../../elements/elements'
class ContectUsPage {
    validAccessContectUs(url) {
        cy.url().should('include', url)
    }

    contactForm(contact) {
        cy.get(el.inpNameInContact)
            .should('be.visible')
            .type(contact.name)

        cy.get(el.inpEmailInContact)
            .should('be.visible')
            .type(contact.email)

        cy.get(el.inpSubjectInContact)
            .should('be.visible')
            .type(contact.subject)

        cy.get(el.msgInContact)
            .should('be.visible')
            .type(contact.message)
    }

    uploadFile(file) {
        cy.fixture(file).as('arquivo')
            cy.get(el.chooseFile)
                .selectFile('@arquivo')
    }

    clickOnSubmitForm() {
        cy.get(el.btnSubmitForm)
            .should('be.visible')
            .click()
    }

    submittedForm(msg) {
        cy.get(el.msgSubmittedForm)
            .should('have.text', msg)
    }
}

export default new ContectUsPage()
