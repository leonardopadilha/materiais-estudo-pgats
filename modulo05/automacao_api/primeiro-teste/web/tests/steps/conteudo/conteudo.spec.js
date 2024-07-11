// @ts-check
require('dotenv').config()
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/login.page');
const { ConteudoPage } = require('../../pages/conteudo/conteudo.page');
const { Menu } = require('../../Components/menu');

const data = require("../../fixtures/testes.json");
const { Conteudo } = require('../../../models/delete');

let loginPage;
let conteudoPage;
let menu;

const LOGIN = process.env.LOGIN
const SENHA = process.env.SENHA
const MENU_CADASTRO_CONTEUDOS = process.env.MENU_CADASTRO_CONTEUDOS

const URL_API = "http://localhost:3000/conteudos"

test.beforeAll(async () => {
    await Conteudo.deletaInformacoes('conteudo')
})

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    conteudoPage = new ConteudoPage(page);
    menu = new Menu(page);
    await loginPage.visit('/')
})
test('Deve acessar a página de conteúdo e selecionar o teste de unidade', async ({ request }) => {
    await loginPage.login(LOGIN, SENHA)
    await menu.selectCadastro(MENU_CADASTRO_CONTEUDOS)

    const teste = data.unidade
    await conteudoPage.titulo(teste.titulo)
    await conteudoPage.descricao(teste.descricao)
    await conteudoPage.selecionarTipoTeste(teste.opcao)
    await conteudoPage.conteudo(teste.conteudo)
    await conteudoPage.clickCadastrar()
    await conteudoPage.confirmarCadastro('Registro Cadastrado com Sucesso!')
    await conteudoPage.exibeCadastro(teste.titulo)

    const idConteudo = await request.get(URL_API)
    const retorno = await idConteudo.json()
    const deleteConteudo = await request.delete(`${URL_API}/${retorno[0].id}`)
    expect(deleteConteudo.ok()).toBeTruthy()
})

test('Deve acessar a página de conteúdo e selecionar o teste de aceitacao', async ({ request }) => {
    await loginPage.login(LOGIN, SENHA)
    await menu.selectCadastro(MENU_CADASTRO_CONTEUDOS)

    const teste = data.aceitacao
    await conteudoPage.titulo(teste.titulo)
    await conteudoPage.descricao(teste.descricao)
    await conteudoPage.selecionarTipoTeste(teste.opcao)
    await conteudoPage.conteudo(teste.conteudo)
    await conteudoPage.clickCadastrar()
    await conteudoPage.confirmarCadastro('Registro Cadastrado com Sucesso!')
    await conteudoPage.exibeCadastro(teste.titulo)

    const idConteudo = await request.get(URL_API)
    const retorno = await idConteudo.json()
    const deleteConteudo = await request.delete(`${URL_API}/${retorno[0].id}`)
    expect(deleteConteudo.ok()).toBeTruthy()
})

test('Deve acessar a página de conteúdo e selecionar o teste de integracao', async ({ request }) => {
    await loginPage.login(LOGIN, SENHA)
    await menu.selectCadastro(MENU_CADASTRO_CONTEUDOS)

    const teste = data.integracao
    await conteudoPage.titulo(teste.titulo)
    await conteudoPage.descricao(teste.descricao)
    await conteudoPage.selecionarTipoTeste(teste.opcao)
    await conteudoPage.conteudo(teste.conteudo)
    await conteudoPage.clickCadastrar()
    await conteudoPage.confirmarCadastro('Registro Cadastrado com Sucesso!')
    await conteudoPage.exibeCadastro(teste.titulo)

    const idConteudo = await request.get(URL_API)
    const retorno = await idConteudo.json()
    const deleteConteudo = await request.delete(`${URL_API}/${retorno[0].id}`)
    expect(deleteConteudo.ok()).toBeTruthy()
})

test('Deve acessar a página de conteúdo e selecionar o teste de perfomance', async ({ request }) => {
    await loginPage.login(LOGIN, SENHA)
    await menu.selectCadastro(MENU_CADASTRO_CONTEUDOS)

    const teste = data.perfomance
    await conteudoPage.titulo(teste.titulo)
    await conteudoPage.descricao(teste.descricao)
    await conteudoPage.selecionarTipoTeste(teste.opcao)
    await conteudoPage.conteudo(teste.conteudo)
    await conteudoPage.clickCadastrar()
    await conteudoPage.confirmarCadastro('Registro Cadastrado com Sucesso!')
    await conteudoPage.exibeCadastro(teste.titulo)

    const idConteudo = await request.get(URL_API)
    const retorno = await idConteudo.json()
    const deleteConteudo = await request.delete(`${URL_API}/${retorno[0].id}`)
    expect(deleteConteudo.ok()).toBeTruthy()
})

test('Deve cadastrar e apagar conteúdo via api', async ({ page, request }) => {
    const teste = data.perfomance

    const conteudo = await request.post(URL_API, {
        data: {
            titulo: teste.titulo,
            descricao: teste.descricao,
            tipoConteudo: teste.opcao,
            conteudo: teste.conteudo
        }
    })
    expect(conteudo.ok()).toBeTruthy()

    await loginPage.login(LOGIN, SENHA)
    await menu.selectCadastro(MENU_CADASTRO_CONTEUDOS)

    await conteudoPage.exibeCadastro(teste.titulo)

    const idConteudo = await request.get(URL_API)
    const retorno = await idConteudo.json()
    const deleteConteudo = await request.delete(`${URL_API}/${retorno[0].id}`)
    expect(deleteConteudo.ok()).toBeTruthy()

    await page.reload();
    await conteudoPage.conteudoDeletetado()
})

test('Deve apenas cadastrar conteúdo via api', async ({ request }) => {
    const teste = data.perfomance

    const conteudo = await request.post(URL_API, {
        data: {
            titulo: teste.titulo,
            descricao: teste.descricao,
            tipoConteudo: teste.opcao,
            conteudo: teste.conteudo
        }
    })
    expect(conteudo.ok()).toBeTruthy()

    await loginPage.login(LOGIN, SENHA)
    await menu.selectCadastro(MENU_CADASTRO_CONTEUDOS)

    await conteudoPage.exibeCadastro(teste.titulo)
})

