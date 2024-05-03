# Projeto de conclusão da matéria: Programação para Automação de Testes

## Configuração Inicial do Projeto

Para começar a trabalhar neste projeto, siga os passos abaixo para configurar o ambiente de desenvolvimento.

### 1. Preparação do Ambiente

- **Crie uma nova pasta** no seu computador para armazenar todos os arquivos relacionados a este projeto. Você pode nomeá-la conforme o nome do projeto ou sua preferência.

### 2. Inicialização do Projeto

- Abra um terminal ou prompt de comando.
- Navegue até a pasta criada utilizando o comando `cd caminho/para/sua/pasta`.
- Execute o comando `npm init` para iniciar um novo projeto Node.js. Siga as instruções no terminal para configurar o `package.json`.

### 3. Instalação do Mocha

- Para instalar o Mocha como uma dependência de desenvolvimento, execute o comando `npm install -D mocha`.

### 4. Configuração do `package.json`

- Abra o arquivo `package.json` gerado.
- Adicione ou modifique a seção `scripts` para incluir o comando de teste com Mocha. Deve ficar assim:

```json
"scripts": {
  "test": "mocha"
}
```

### 4. Estrutura das pastas

```
projeto/
│
├── src/
│   └── compras/
│       └── compras.js
│
└── test/
    └── compras/
        └── compras.test.js
```

## Execução dos testes desse projeto

### 1. Instalação

- Para realizar a instalação do projeto

```
npm install
```	

### 2. Execução dos testes

```
npm test
```