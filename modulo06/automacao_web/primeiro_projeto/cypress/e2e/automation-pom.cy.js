import homePage from '../support/pages/home'
import menu from '../support/components'
import linkMenu from '../support/constants/constants'
import register from '../support/pages/register'
import user from '../support/users/createUser'

const name = user.name()
const email = user.email()

describe('#Register a new user', () => {
    it('Test Case 1: Register User', () => {
        homePage.go('/')
        homePage.validAccessHome()
        menu.clickOn(linkMenu.SIGNUP)

        register.validAccessMenuRegister()
        register.regiserNewUser(name, email)

    })
})