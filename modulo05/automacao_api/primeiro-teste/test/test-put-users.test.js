const { postUser } = require('../functions/users/postUser');
const { putUser } = require('../functions/users/putUser');
const createUser = require('../functions/utils/users/createUser');

describe('Suíte de testes da api users...', () => {

    describe('PUT users', () => {

        beforeEach(() => {
            user = createUser()
        });

        it('Deve alterar usuário pesquisado via id', async () => {
            const response = await postUser(user)
            const newUser = createUser()

            const updateUser = await putUser(user, response.body.id)
            expect(updateUser.status).toEqual(201)
            expect(updateUser.body.nome).toEqual(newUser.nome)
            expect(updateUser.body.telefone).toEqual(newUser.telefone)
            expect(updateUser.body.email).toEqual(response.body.email)
        })
    })
})