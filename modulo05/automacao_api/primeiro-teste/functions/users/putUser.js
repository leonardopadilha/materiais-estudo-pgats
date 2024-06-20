const request = require('supertest')

const rota = "http://localhost:3000"

async function putUser(user, id) {
    const response = await request(rota)
                            .put(`/users/${id}`)
                                .send(user)
    return response
}

module.exports = {
    putUser
}