require('dotenv').config()
const request = require('supertest')

const rota = process.env.URL

async function alteraUmConteudo(id, novoConteudo) {
    const response = await request(rota).put(`/conteudos/${id}`).send(novoConteudo)
    return response
}

module.exports = {
    alteraUmConteudo
}