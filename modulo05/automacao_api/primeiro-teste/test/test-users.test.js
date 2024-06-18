const request = require('supertest')
const { faker } = require('@faker-js/faker');

const rota = "http://localhost:3000"

describe('Suíte de testes da api users...', () => {

    beforeEach(() => {
        user = {
            nome: faker.internet.userName(),
            telefone: "(99) 99999-9999",
            email: faker.internet.email(),
            senha: "123123"
        }
    });

    describe('PUT users', () => {
        it('Deve alterar usuário pesquisado via id', async () => {
            const response = await request(rota).post('/users').send(user)

            const newUser = {
                nome: faker.internet.userName(),
                telefone: faker.phone.number(),
                email: faker.internet.email(),
                senha: "xpto-xpto"
            }

            const updateUser = await request(rota).put(`/users/${response.body.id}`).send(newUser)
            expect(updateUser.status).toEqual(201)
            expect(updateUser.body.nome).toEqual(newUser.nome)
            expect(updateUser.body.telefone).toEqual(newUser.telefone)
            expect(updateUser.body.email).toEqual(user.email)
        })
    })
})