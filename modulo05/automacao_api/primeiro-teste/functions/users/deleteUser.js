require('dotenv').config()
const request = require('supertest')

const rota = process.env.URL

async function deleteUser(id) {
    const response = await request(rota).delete(`/users/${id}`)
    return response
}

module.exports = deleteUser