const request = require('supertest')

const rota = "http://localhost:3000"

async function deleteUser(id) {
    const response = await request(rota).delete(`/users/${id}`)
    return response
}

module.exports = deleteUser