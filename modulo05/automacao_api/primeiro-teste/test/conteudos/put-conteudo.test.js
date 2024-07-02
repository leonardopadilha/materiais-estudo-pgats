const { delConteudo } = require("../../functions/conteudos/deleteConteudo");
const { getUmConteudo } = require("../../functions/conteudos/getConteudo");
const { postConteudo } = require("../../functions/conteudos/postConteudo");
const { alteraUmConteudo } = require("../../functions/conteudos/putConteudo");
const createConteudo = require("../../functions/utils/conteudos/createConteudo");

describe('Suíte de teste de conteúdos com put...', () => {
    beforeEach(() => {
        conteudo = createConteudo()
    });

    it('Alterar um conteúdo salvo com sucesso', async () => {
        const response = await postConteudo(conteudo)
        expect(response.status).toBe(201);

        const novoConteudo = createConteudo()

        const conteudoAlterado = await alteraUmConteudo(response.body.id, novoConteudo)
        expect(conteudoAlterado.status).toEqual(201)
        expect(conteudoAlterado.body.id).toBeDefined()
        expect(conteudoAlterado.body.titulo).toEqual(novoConteudo.titulo)

        const conteudoRetornado = await getUmConteudo(response.body.id)
        expect(conteudoRetornado.status).toEqual(200)
        expect(conteudoRetornado.body.titulo).toEqual(novoConteudo.titulo)
   
        const delete_conteudo = await delConteudo(response.body.id)
        expect(delete_conteudo.status).toBe(200)

        const conteudoNaoEncontrado = await getUmConteudo(response.body.id)
        expect(conteudoNaoEncontrado.status).toEqual(404)
        expect(conteudoNaoEncontrado.body).toEqual({"error": `O conteúdo com o ID: ${response.body.id} não foi encontrado.`})
    })

    it('Alterar um conteúdo que não existe mais', async () => {
        const response = await postConteudo(conteudo)
        expect(response.status).toBe(201);
        const id = response.body.id

        const delete_conteudo = await delConteudo(id)
        expect(delete_conteudo.status).toBe(200)

        novoConteudo = createConteudo()

        const conteudoAlterado = await alteraUmConteudo(id, novoConteudo)
        expect(conteudoAlterado.status).toEqual(404)
        expect(conteudoAlterado.body).toEqual({"error": `O contedúdo que você está tentando alterar não existe na base de dados. ID INFORMADO: ${id}`})
    })
});
