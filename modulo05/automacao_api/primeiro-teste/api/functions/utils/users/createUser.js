const { faker } = require('@faker-js/faker');

function createUser() {
    user = {
        nome: faker.internet.userName(),
        telefone: faker.phone.number(),
        email: faker.internet.email(),
        senha: "123123"
    }

    return user
}

module.exports = createUser