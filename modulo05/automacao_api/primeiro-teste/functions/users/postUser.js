const request = require('supertest')

const rota = "http://localhost:3000"

async function postUser(user) {
    const response = await request(rota)
                        .post('/users')
                            .send(user)
    return response
}

module.exports = {
    postUser
}