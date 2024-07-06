// @ts-check
require('dotenv').config()
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/login.page');
const { Menu } = require('../../Components/menu');
const { CadastroPage } = require('../../pages/user/cadastro.page');
const data = require('../../fixtures/usuario.json')

let loginPage;
let cadastroPage
let menu;

const LOGIN = process.env.LOGIN
const SENHA = process.env.SENHA

const URL_API = "http://localhost:3000/users"

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  cadastroPage = new CadastroPage(page);
  menu = new Menu(page);
  await loginPage.visit('/')
})

test('Deve cadastrar usuário com sucesso', async ({ request }) => {
  const MENU_CADASTRO_USUARIOS = process.env.MENU_CADASTRO_USUARIOS

  const usuario = data.sucesso

  await loginPage.login(LOGIN, SENHA)
  await menu.selectCadastro(MENU_CADASTRO_USUARIOS)

  await cadastroPage.novoUsuario(usuario)
  await cadastroPage.clickOnCadastrar()
  await cadastroPage.cadastroSucesso('Usuário cadastrado com sucesso!')
  await cadastroPage.clickOk()
  await cadastroPage.verificarTabela(usuario.email)

  const idUsuario = await request.get(URL_API)
  const retorno = await idUsuario.json()
  const deleteUsuario = await request.delete(`${URL_API}/${retorno[0].id}`)
  expect(deleteUsuario.ok()).toBeTruthy()
});

