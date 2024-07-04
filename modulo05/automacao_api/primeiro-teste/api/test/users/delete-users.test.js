const deleteUser = require('../../functions/users/deleteUser');
const { getUsers } = require('../../functions/users/getUser');

describe('Limpar base de users...', () => {

    it('Limpar base de usuários por id', async () => {
        const response = await getUsers()
        expect(response.status).toEqual(200)

        for (let i = 0; i < response.body.length; i++) {
            const delUser = await deleteUser(response.body[i].id)
            expect(delUser.status).toEqual(204)
        }
    });
})