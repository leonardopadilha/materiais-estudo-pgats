// @ts-check
require('dotenv').config()
const { test } = require('@playwright/test');
const { LoginPage } = require('../../pages/login.page');
const { Menu } = require('../../Components/menu');
const { CadastroPage } = require('../../pages/user/cadastro.page');
const data = require('../../fixtures/usuario.json')

let loginPage;
let cadastroPage
let menu;

const LOGIN = process.env.LOGIN
const SENHA = process.env.SENHA

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  cadastroPage = new CadastroPage(page);
  menu = new Menu(page);
  await loginPage.visit('/')
})

test('Deve cadastrar usuário com sucesso', async () => {
  const MENU_CADASTRO_USUARIOS = process.env.MENU_CADASTRO_USUARIOS

  const usuario = data.sucesso

  await loginPage.login(LOGIN, SENHA)
  await menu.selectCadastro(MENU_CADASTRO_USUARIOS)
  await cadastroPage.novoUsuario(usuario)
  await cadastroPage.clickOnCadastrar()
  await cadastroPage.cadastroSucesso('Usuário cadastrado com sucesso!')
  await cadastroPage.clickOk()
  await cadastroPage.verificarTabela(usuario.email)
});

