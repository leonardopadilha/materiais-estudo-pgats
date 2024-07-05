// @ts-check
require('dotenv').config()
const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { Menu } = require('../Components/menu');

let loginPage;
let menu;

const LOGIN = process.env.LOGIN
const SENHA = process.env.SENHA

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  menu = new Menu(page);
  await loginPage.visit('/')
})

test('Acessar menu com sucesso - Cadastro de usuários', async () => {
  const MENU_CADASTRO_USUARIOS = process.env.MENU_CADASTRO_USUARIOS
  const TITLE_CADASTRO_USUARIOS= process.env.TITLE_CADASTRO_USUARIOS

  await loginPage.login(LOGIN, SENHA)
  await menu.selectCadastro(MENU_CADASTRO_USUARIOS)
  await menu.acessarTelaComSucesso(TITLE_CADASTRO_USUARIOS)
});

test('Acessar menu com sucesso - Cadastro de atividades', async () => {
  const MENU_CADASTRO_ATIVIDADES = process.env.MENU_CADASTRO_ATIVIDADES
  const TITLE_CADASTRO_ATIVIDADES= process.env.TITLE_CADASTRO_ATIVIDADES

  await loginPage.login(LOGIN, SENHA)
  await menu.selectCadastro(MENU_CADASTRO_ATIVIDADES)
  await menu.acessarTelaComSucesso(TITLE_CADASTRO_ATIVIDADES)
});

test('Acessar menu com sucesso - Cadastro de conteúdos', async () => {
  const MENU_CADASTRO_CONTEUDOS = process.env.MENU_CADASTRO_CONTEUDOS
  const TITLE_CADASTRO_CONTEUDOS= process.env.TITLE_CADASTRO_CONTEUDOS

  await loginPage.login(LOGIN, SENHA)
  await menu.selectCadastro(MENU_CADASTRO_CONTEUDOS)
  await menu.acessarTelaComSucesso(TITLE_CADASTRO_CONTEUDOS)
});