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

### 5. Estrutura das pastas

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

### 3. Pensamento computacional

Aqui está a tabela transformada em bullet points:

- **Decomposição**
  - Criar uma lista com ferramentas e outra lista com a ferramenta desejada.

- **Reconhecimento de padrão**
  - Nenhuma das listas pode estar vazia.
  - Cada lista deve conter pelo menos 1 elemento.
  - Os itens descritos na lista de ferramentas, deverão conter: nome, preço e fabricante.

- **Abstração**
  - Não é preciso se preocupar com quais ferramentas serão informadas.
  - O teste passa quando pelo menos um item na lista de comprar é encontrado na lista de ferramentas.
  - Quando nenhum item na lista de comprar é encontrado na lista de ferramentas, deve retornar uma mensagem para o usuário.
  - Quando uma ou mais lista estiver vazia, deve retornar uma mensagem para o usuário.

- **Pensamento Algorítmico**
  - Verificar se uma ou mais listas estão vazias.
  - Verificar se algum item da lista de comprar foi encontrado na lista de ferramentas.
  - Se um item da lista de comprar foi encontrado em ferramentas, deve ser salvo o(s) nome(s) para serem apresentados assim como o valor total para pagamento.
  - Se nenhum item na lista de ferramentas for encontrado, o usuário deverá ser notificado.
  - Se uma ou ambas as listas estiverem vazias, o usuário deverá ser notificado.