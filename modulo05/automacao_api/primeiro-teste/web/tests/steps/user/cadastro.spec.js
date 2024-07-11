// @ts-check
require('dotenv').config()
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/login.page');
const { Menu } = require('../../Components/menu');
const { CadastroPage } = require('../../pages/user/cadastro.page');

const data = require('../../fixtures/usuario.json');
const { Conteudo } = require('../../../models/delete');

let loginPage;
let cadastroPage
let menu;

const LOGIN = process.env.LOGIN
const SENHA = process.env.SENHA
const MENU_CADASTRO_USUARIOS = process.env.MENU_CADASTRO_USUARIOS

const URL_API = "http://localhost:3000/users"

test.beforeAll(async () => {
  await Conteudo.deletaInformacoes('users')
})

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  cadastroPage = new CadastroPage(page);
  menu = new Menu(page);
  await loginPage.visit('/')
})

test('Deve cadastrar usuário com sucesso', async ({ request }) => {
  const usuario = data.sucesso

  await loginPage.login(LOGIN, SENHA)
  await menu.selectCadastro(MENU_CADASTRO_USUARIOS)

  await cadastroPage.novoUsuario(usuario)
  await cadastroPage.clickOnCadastrar()
  await cadastroPage.cadastroSucesso('Usuário cadastrado com sucesso!')
  await cadastroPage.verificarTabela(usuario.email)

  // Apagando registro via api
  const idUsuario = await request.get(URL_API)
  const retorno = await idUsuario.json()
  const deleteUsuario = await request.delete(`${URL_API}/${retorno[0].id}`)
  expect(deleteUsuario.ok()).toBeTruthy()
});

test('Deve apagar usuário criado via api com sucesso', async ({ request }) => {
  const usuario = data.deletado

  // criando registro via api
  const usuarioApi = await request.post(URL_API, {
    data: {
      nome: usuario.nome,
      telefone: usuario.telefone,
      email: usuario.email,
      senha: usuario.senha
    }
  })
  expect(usuarioApi.ok()).toBeTruthy()

  await loginPage.login(LOGIN, SENHA)
  await menu.selectCadastro(MENU_CADASTRO_USUARIOS)

  // confirma criação via api
  await cadastroPage.verificarTabela(usuario.email)
  await cadastroPage.clickOnExcluir()
  await cadastroPage.confirmarExclusao('Tem certeza de que deseja excluir este registro??')
  await cadastroPage.verificarExclusaoEmailTabela()
});

