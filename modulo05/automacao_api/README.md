# Projeto Final - Automação API

Automação de teste API utilizando Jest

## Tecnologias Utilizadas

[![NODE](https://img.shields.io/badge/License-node-green.svg)](https://nodejs.org/en)
[![Jest](https://img.shields.io/badge/license-jest-red.svg)](https://jestjs.io/pt-BR)
[![Playwright](https://img.shields.io/badge/license-playwright-red.svg)](https://playwright.dev/)
[![Knex](https://img.shields.io/badge/license-knex-red.svg)](https://knexjs.org/)
[![JS](https://img.shields.io/badge/license-javascript-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Descrição do Projeto

Este projeto foi desenvolvido como parte de um trabalho de pós-graduação focado em automação de testes. O objetivo principal é criar uma suíte de testes automatizados para um aplicativo disponibilizado durante a mentoria de teste de software aplicada pelo Júlio de Lima. A automação de testes visa garantir a qualidade e a funcionalidade do aplicativo, cobrindo cenários críticos e preparando a base para a expansão futura dos testes.

## Cenários Automatizados

Até o momento, os seguintes cenários foram automatizados:

1. **Validações na rota de usuário**
2. **Validações na rota de conteúdo**
3. **Validações na web referente ao cadastro de usuário e conteúdo**
4. **Testes no front consumindo a API**
5. **Apagando registros criados através do front utilizando a biblioteca do Knex**

## Instalação

Instalar as dependências

```bash
  npm install
```

## Execução dos testes de API (dentro da pasta primeiro-teste/api)

```bash
  npm run test
```

## Execução dos testes WEB (dentro da pasta primeiro-teste/web)

```bash
  npm run test
```
