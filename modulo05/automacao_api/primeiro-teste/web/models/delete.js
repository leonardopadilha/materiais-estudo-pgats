const db = require('../db/dbConfig')

class Conteudo {
    static async deletaInformacoes(tabela) {
        await db(tabela).delete()
    }
}

module.exports = {
    Conteudo
}