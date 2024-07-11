const { delConteudo } = require("../../functions/conteudos/deleteConteudo");
const { getUmConteudo, getConteudo } = require("../../functions/conteudos/getConteudo");
const { postConteudo } = require("../../functions/conteudos/postConteudo");
const createConteudo = require("../../functions/utils/conteudos/createConteudo");
const { Conteudo } = require('../../../web/models/delete')

describe('Suíte de teste de conteúdos com get...', () => {

    beforeAll(async () => {
        await Conteudo.deletaInformacoes('conteudo')
    })

    beforeEach(() => {
        conteudo = createConteudo()
    });

    it('Retorna um conteúdo salvo com sucesso', async () => {
        const response = await postConteudo(conteudo)
        expect(response.status).toBe(201);

        const conteudoRetornado = await getUmConteudo(response.body.id)
        expect(conteudoRetornado.status).toEqual(200)
        expect(conteudoRetornado.body.id).toBeDefined()
        expect(conteudoRetornado.body.titulo).toEqual(conteudo.titulo)
        expect(conteudoRetornado.body.descricao).toEqual(conteudo.descricao)
        expect(conteudoRetornado.body.tipoConteudo).toEqual(conteudo.tipoConteudo)
        expect(conteudoRetornado.body.conteudo).toEqual(conteudo.conteudo)
        expect(conteudoRetornado.body.dataCadastro).toBeDefined()

        const delete_conteudo = await delConteudo(response.body.id)
        expect(delete_conteudo.status).toBe(200)
    })

    it('Retorna os conteúdos salvos com sucesso', async () => {
        const response = await postConteudo(conteudo)
        expect(response.status).toBe(201);

        const conteudoRetornado = await getConteudo()
        expect(conteudoRetornado.status).toEqual(200)
        expect(conteudoRetornado.body).toBeDefined()
        expect(conteudoRetornado.body[0]).toEqual(expect.objectContaining(conteudo))
   
        const delete_conteudo = await delConteudo(response.body.id)
        expect(delete_conteudo.status).toBe(200)
    })
});
