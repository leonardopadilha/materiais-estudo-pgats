require('dotenv').config()
const request = require('supertest')

const rota = process.env.URL

async function getConteudo() {
    const response = await request(rota).get('/conteudos')
    return response
}

async function getUmConteudo(id) {
    const response = await request(rota).get(`/conteudos/${id}`)
    return response
}

module.exports = {
    getConteudo,
    getUmConteudo
}