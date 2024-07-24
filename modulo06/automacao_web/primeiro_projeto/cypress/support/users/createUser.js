const { faker } = require('@faker-js/faker')

class User {
  
    name() {
        return faker.internet.userName()
    }

    email() {
        return faker.internet.email()
    }
}

export default new User()