const { delConteudo } = require("../../functions/conteudos/deleteConteudo");
const { postConteudo } = require("../../functions/conteudos/postConteudo");
const createConteudo = require("../../functions/utils/conteudos/createConteudo");
const { getUmConteudo } = require("../../functions/conteudos/getConteudo");
const { Conteudo } = require('../../../web/models/delete')

describe('Suíte de teste de conteúdos com delete...', () => {
    beforeAll(async () => {
        await Conteudo.deletaInformacoes('conteudo')
    })

    beforeEach(() => {
        conteudo = createConteudo()
    });

    it('Deve retornar 404 quando sistema tentar deletar um registro que não existe mais', async () => {
        const response = await postConteudo(conteudo)
        expect(response.status).toBe(201);

        await delConteudo(response.body.id)
        const delete_conteudo = await delConteudo(response.body.id)
        expect(delete_conteudo.status).toBe(404)
        expect(delete_conteudo.body).toEqual({"error": "Erro ao excluir o conteúdo, o conteúdo não foi encontrado."})

        const conteudoNaoEncontrado = await getUmConteudo(response.body.id)
        expect(conteudoNaoEncontrado.status).toEqual(404)
        expect(conteudoNaoEncontrado.body).toEqual({"error": `O conteúdo com o ID: ${response.body.id} não foi encontrado.`})
    })
});
