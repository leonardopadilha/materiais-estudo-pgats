// @ts-check
require('dotenv').config()
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

let loginPage;
const LOGIN = process.env.LOGIN
const SENHA = process.env.SENHA

test.beforeEach(({ page }) => {
  loginPage = new LoginPage(page);
})

test('Login com sucesso', async () => {
  await loginPage.visit('/')
  await loginPage.login(LOGIN, SENHA)
  await loginPage.expectLoginSuccess()
});
