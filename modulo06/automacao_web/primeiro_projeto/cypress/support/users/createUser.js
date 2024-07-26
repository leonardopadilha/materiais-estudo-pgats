const { faker } = require('@faker-js/faker')

class User {
  
    name() {
        return faker.person.fullName()
    }

    email() {
        return faker.internet.email()
    }
}

export default new User()