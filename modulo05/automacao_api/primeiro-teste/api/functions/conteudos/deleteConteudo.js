require('dotenv').config()
const request = require('supertest')

const rota = process.env.URL

async function delConteudo(id) {
    const response = await request(rota).delete(`/conteudos/${id}`)
    return response
}

module.exports = {
    delConteudo
}