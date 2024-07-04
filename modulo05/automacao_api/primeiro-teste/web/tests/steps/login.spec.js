// @ts-check
require('dotenv').config()
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

let loginPage;
const LOGIN = process.env.LOGIN
const SENHA = process.env.SENHA

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.visit('/')
})

test('Login com sucesso', async () => {
  await loginPage.login(LOGIN, SENHA)
  await loginPage.expectLoginSuccess()
});

test('Não deve logar com usuário inválido', async () => {
  const usuario = {
    login: "login",
    senha: 'admin'
  }
  await loginPage.login(usuario.login, usuario.senha)
  await loginPage.expectLoginInvalido('Nome de usuário ou senha incorretos.')
})

test('Não deve logar com senha inválido', async () => {
  const usuario = {
    login: "admin",
    senha: 'senha'
  }
  await loginPage.login(usuario.login, usuario.senha)
  await loginPage.expectLoginInvalido('Nome de usuário ou senha incorretos.')
})
