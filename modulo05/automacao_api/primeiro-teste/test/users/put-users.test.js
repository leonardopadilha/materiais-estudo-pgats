const { postUser } = require('../../functions/users/postUser');
const { putUser } = require('../../functions/users/putUser');
const createUser = require('../../functions/utils/users/createUser');
const deleteUser = require('../../functions/users/deleteUser');
const { getUniqueUser } = require('../../functions/users/getUser');

describe('Suíte de testes da api users...', () => {

    describe('PUT users', () => {

        beforeEach(() => {
            user = createUser()
        });

        it('Deve alterar usuário pesquisado via id', async () => {
            const response = await postUser(user)
            const newUser = createUser()

            const updateUser = await putUser(response.body.id, newUser)
            expect(updateUser.status).toEqual(201)
            expect(updateUser.body.nome).toEqual(newUser.nome)
            expect(updateUser.body.telefone).toEqual(newUser.telefone)
            expect(updateUser.body.email).toEqual(response.body.email)

            const delUser = await deleteUser(response.body.id)
            expect(delUser.status).toEqual(204)

            const getUser = await getUniqueUser(response.body.id)
            expect(getUser.status).toEqual(404)
            expect(getUser.body).toEqual({error:"Usuário não encontrado"})
        })
    })
})