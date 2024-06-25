const { postUser } = require('../../functions/users/postUser');
const createUser = require('../../functions/utils/users/createUser');
const { getUsers, getUniqueUser } = require('../../functions/users/getUser');
const deleteUser = require('../../functions/users/deleteUser');

describe('Suíte de testes da api users...', () => {

    beforeEach(() => {
        user = createUser()
    });

    describe('GET users', () => {
        it('Consulta todos os usuários...deve retornar status 200', async () => {
            const response = await getUsers()
            expect(response.status).toEqual(200)
            expect(response.body[0].id).not.toBeNull()
            expect(response.body[0].id).toBeGreaterThan(0)
        });

        it('Deve retornar os dados do cliente pesquisado por id válido', async () => {
            const response = await postUser(user)

            const getUser = await getUniqueUser(response.body.id)
            expect(getUser.status).toEqual(200)
            expect(getUser.body.nome).toEqual(user.nome)
            expect(getUser.body.email).toEqual(user.email)
        })
        it('Deve retornar erro quando o id do usuário não existir', async () => {
            const response = await postUser(user)
            expect(response.status).toEqual(201)
            
            const delUser = await deleteUser(response.body.id)
            expect(delUser.status).toEqual(204)

            const userNotFound = await getUniqueUser(response.body.id)
            expect(userNotFound.status).toEqual(404)
            expect(userNotFound.text).toContain('Usuário não encontrado')
        })
    })
})