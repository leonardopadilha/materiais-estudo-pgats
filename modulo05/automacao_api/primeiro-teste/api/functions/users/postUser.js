require('dotenv').config()
const request = require('supertest')

const rota = process.env.URL

async function postUser(user) {
    const response = await request(rota)
                        .post('/users')
                            .send(user)
    return response
}

module.exports = {
    postUser
}