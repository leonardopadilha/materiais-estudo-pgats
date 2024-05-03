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

### 3. Pensamento computacional
        
| Decomposição                  | Reconhecimento de padrão     | Abstração                    | Pensamento Algorítmico    |
|-------------------------------|------------------------------|------------------------------|----------------------------|
| Criar uma lista com ferramentas de automação e outra lista com a ferramenta desejada. | Nenhuma das listas pode estar vazia. | Não é preciso se preocupar com quais ferramentas serão informadas. | Verificar se uma ou mais listas estão vazias. |
|                               | Cada lista deve conter pelo menos 1 elemento. | O teste passa quando pelo menos um item na lista de comprar é encontrado na lista de ferramentas. | Verificar se algum item da lista de comprar foi encontrado na lista de ferramentas. |
|                               | Os itens descritos na lista de ferramentas, deverão conter: nome, preço e fabricante. |  | Se um item da lista de comprar foi encontrado em ferramentas, deve ser salvo o(s) nome(s) para serem apresentados assim como o valor total para pagamento. |
|                               |                                | Quando nenhum item na lista de comprar é encontrado na lista de ferramentas, deve retornar uma mensagem para o usuário. |  |
|                               |                                | Quando uma ou mais lista estiver vazia, deve retornar uma mensagem para o usuário. | Se o nenhum item na lista de ferramentas for encontrado o usuário deverá ser notificado. |
|                               |                                |                                | Se uma ou ambas as listas estiverem vazias, o usuário deverá ser notificado. |
|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| Criar uma lista com ferramentas| Nenhuma das listas pode estar  | Não é preciso se preocupar com | Verificar se uma ou mais listas|
| de automação e outra lista com | vazia.                         | quais ferramentas serão        | estão vazias.                  |
| a ferramenta desejada.         |                                | informadas.                    |                                | 
|                                | Cada lista deve conter pelo    |                                | Verificar se algum item da     |
|                                | menos 1 elemento.              | O teste passa quando pelo      | lista de comprar foi           |
|                                |                                | menos um item na lista de      | encontrado na lista de         |
|                                | Os itens descritos na lista de | comprar é encontrado na lista  | ferramentas.                   |
|                                | ferramentas, deverão conter:   | de ferramentas.                |                                |
|                                | nome, preco e fabricante.      |                                | Se um item da lista de comprar |
|                                |                                | Quando nenhum item na lista    | foi encontrado em ferramentas, |
|                                |                                | de comprar é encontrado na     | deve ser salvo o(s) nome(s)    |
|                                |                                | lista de ferramentas, deve     | para serem apresentados assim  |
|                                |                                | retornar uma mensagem para o   | como o valor total para        |
|                                |                                | usuário.                       | pagamento.                     |
|                                |                                |                                |                                |
|                                |                                | Quando uma ou mais lista       | Se o nenhum item na lista de   |
|                                |                                | estiver vazia, deve retornar   | de ferramentas for encontrado  |
|                                |                                | uma mensagem para o usuário.   | o usuário deverá ser notificado|
|                                |                                |                                |                                |
|                                |                                |                                | Se uma ou ambas as listas      |
|                                |                                |                                | estiverem vazias, o usuário    |
|                                |                                |                                | deverá ser noficado.           |