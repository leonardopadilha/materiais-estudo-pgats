const deleteUser = require('../../functions/users/deleteUser');
const { postUser } = require('../../functions/users/postUser');
const createUser = require('../../functions/utils/users/createUser');

describe('Suíte de testes da api users...', () => {

    beforeEach(() => {
        user = createUser()
    });

    describe('POST users', () => {
        it('Deve validar que o campo nome é obrigatório', async () => {
            delete user.nome
    
            const response = await postUser(user)
            expect(response.status).toEqual(422)
            expect(response.body).toEqual({ error: 'Os seguintes campos são obrigatórios: nome' })
        });

        it('Deve validar que o campo telefone é obrigatório', async () => {
            delete user.telefone

            const response = await postUser(user)
            expect(response.status).toEqual(422)
            expect(response.text).toContain('Os seguintes campos são obrigatórios: telefone')
        });

        it('Deve validar que o campo email é obrigatório', async () => {
            delete user.email

            const response = await postUser(user)
            expect(response.status).toEqual(422)
            expect(response.text).toContain('Os seguintes campos são obrigatórios: email')
        });

        it('Deve validar que o campo senha é obrigatório', async () => {
            delete user.senha

            const response = await postUser(user)
                expect(response.status).toEqual(422)
                expect(response.text).toContain('Os seguintes campos são obrigatórios: senha')
        });
        it('Usuário deve ser cadastrado com sucesso', async () => {
           const response = await postUser(user)
                    expect(response.status).toEqual(201)
                    expect(response.body.id).not.toBeNull()
                    expect(response.body.nome).toEqual(user.nome)
                    expect(response.body.email).toEqual(user.email)

            const delUser = await deleteUser(response.body.id)
            expect(delUser.status).toEqual(204)
        })

        it('Quando cadastrar um usuário que já esteja na base, deve retornar 422', async () => {
           const userdelete = await postUser(user)

            const response = await postUser(user)
            expect(response.status).toEqual(422)
            expect(response.text).toContain('E-mail já está em uso')

            const delUser = await deleteUser(userdelete.body.id)
            expect(delUser.status).toEqual(204)
        })

        it('Não deve cadastrar um usuário com os dados vazios', async () => {
            user.nome = ""
            user.telefone = ""
            user.email = ""
            user.senha = ""

            const response = await postUser(user)
            expect(response.status).toEqual(422)
            expect(response.text).toContain("Os seguintes campos são obrigatórios: nome, telefone, email, senha")
        })
    })
})