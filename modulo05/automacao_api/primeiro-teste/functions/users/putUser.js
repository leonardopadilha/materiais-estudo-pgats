require('dotenv').config()
const request = require('supertest')

const rota = process.env.URL

async function putUser(id, user) {
    const response = await request(rota)
                            .put(`/users/${id}`)
                                .send(user)
    return response
}

module.exports = {
    putUser
}