require('dotenv').config()
const request = require('supertest')

const rota = process.env.URL

async function postConteudo(conteudo) {
    const response = await request(rota).post('/conteudos').send(conteudo)
    return response
}

module.exports = {
    postConteudo
}