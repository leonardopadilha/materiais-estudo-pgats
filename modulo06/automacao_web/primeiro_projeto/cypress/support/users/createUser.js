const { faker } = require('@faker-js/faker')

class User {
  
    name() {
        return faker.person.fullName()
    }

    email() {
        return faker.internet.email()
    }

    firstName() {
        return faker.person.firstName()
    }

    lastName() {
        return faker.person.lastName()
    }
}

export default new User()