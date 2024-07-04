const { delConteudo } = require("../../functions/conteudos/deleteConteudo");
const { postConteudo } = require("../../functions/conteudos/postConteudo");
const createConteudo = require("../../functions/utils/conteudos/createConteudo");

describe('Suíte de teste de conteúdos com post...', () => {
    beforeEach(() => {
        conteudo = createConteudo()
    });

    it('Cadastro de conteúdo com sucesso', async () => {
        const response = await postConteudo(conteudo)
        expect(response.status).toBe(201);
        expect(response.body.id).toBeDefined()
        expect(response.body.titulo).toEqual(conteudo.titulo)

        const delete_conteudo = await delConteudo(response.body.id)
        expect(delete_conteudo.status).toBe(200)
        expect(delete_conteudo.body).toEqual({"message": "O conteúdo foi removido com sucesso!"})
    })

    it('Não deve cadastrar conteúdo sem o campo título', async () => {
        delete conteudo.titulo

        const response = await postConteudo(conteudo)
        expect(response.status).toBe(422)
        expect(response.body).toEqual({"error": "Os seguintes campos são obrigatórios: titulo"})
    })

    it('Não deve cadastrar conteúdo sem o campo descrição', async () => {
        delete conteudo.descricao

        const response = await postConteudo(conteudo)
        expect(response.status).toBe(422)
        expect(response.body).toEqual({"error": "Os seguintes campos são obrigatórios: descricao"})
    })

    it('Não deve cadastrar conteúdo sem o campo tipoConteudo', async () => {
        delete conteudo.tipoConteudo

        const response = await postConteudo(conteudo)
        expect(response.status).toBe(422)
        expect(response.body).toEqual({"error": "Os seguintes campos são obrigatórios: tipoConteudo"})
    })

    it('Não deve cadastrar conteúdo sem o campo conteudo', async () => {
        delete conteudo.conteudo

        const response = await postConteudo(conteudo)
        expect(response.status).toBe(422)
        expect(response.body).toEqual({"error": "Os seguintes campos são obrigatórios: conteudo"})
    })

    it('Não deve cadastrar conteúdo com o campo extra: id', async () => {
        conteudo.id = "2000"

        const response = await postConteudo(conteudo)
        expect(response.status).toBe(422)
        expect(response.body).toEqual({"error": "Campos extras encontrados: id"})
    })

    it('Não deve cadastrar conteúdo com o campo extra: dataCadastro', async () => {
        conteudo.dataCadastro = "2024-06-26T23:06:58.755Z"

        const response = await postConteudo(conteudo)
        expect(response.status).toBe(422)
        expect(response.body).toEqual({"error": "Campos extras encontrados: dataCadastro"})
    })
});
