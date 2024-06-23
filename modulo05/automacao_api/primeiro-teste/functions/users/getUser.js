const request = require('supertest')

const rota = "http://localhost:3000"

async function getUsers() {
    const response = await request(rota).get('/users')
    return response
}

async function getUniqueUser(userId) {
    const response = await request(rota).get(`/users/${userId}`)
    return response
}

module.exports = {
    getUniqueUser,
    getUsers
}