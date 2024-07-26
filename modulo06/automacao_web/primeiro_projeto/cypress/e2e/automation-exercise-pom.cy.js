import homePage from '../support/pages/home'
import menu from '../support/components'
import linkMenu from '../support/constants/constants'
import register from '../support/pages/register'
import user from '../support/users/createUser'

const name = user.name()
const email = user.email()
const firstName = user.firstName()
const lastName = user.lastName()

describe('#Register a new user', () => {
    it('Test Case 1: Register User', () => {
        homePage.go('/')
        homePage.validAccessHome()
        menu.clickOn(linkMenu.SIGNUP)

        register.validAccessMenuRegister()
        register.registerNewUser(name, email)

        register.title('Mr')
        register.createPassword('123456')
        register.dateOfBirthday()
        register.confirmNewsletter('sim')
        register.receiveOffers('sim')
        register.fistName(firstName)
        register.lastName(lastName)
        register.company("Testing company")
        register.firstAddress('Test')
        register.secondAddress('Test II')
        register.country('New Zealand')
        register.location('State of Test', 'City of Test', '123456')
        register.phoneNumber('654321')
        register.confirmRegister()
        register.succedRegister()

    })
})