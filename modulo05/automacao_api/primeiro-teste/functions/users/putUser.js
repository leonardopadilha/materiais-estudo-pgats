const request = require('supertest')

const rota = "http://localhost:3000"

async function putUser(id, user) {
    const response = await request(rota)
                            .put(`/users/${id}`)
                                .send(user)
    return response
}

module.exports = {
    putUser
}