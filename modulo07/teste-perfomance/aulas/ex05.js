import http from 'k6/http'
import { check, sleep, group } from 'k6'
import { faker } from 'https://esm.sh/@faker-js/faker'

export default function() {
    let tokenColetadoNaResposta;

    group('Obtendo o token do usuário', () => {
        const endpointRequestLogin = 'http://165.227.93.41/lojinha/v2/login'

        const bodyRequestLogin = JSON.stringify({
            usuarioLogin: 'cgts',
            usuarioSenha: '123456'
        })

        const optionRequestLogin = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const respostaLogin = http.post(endpointRequestLogin, bodyRequestLogin, optionRequestLogin)
        check(respostaLogin, {
            'Status code é igual a 200' : r => r.status === 200,
            'A mensagem de sucesso ao realizar o login foi apresenada': r => r.json('message') === 'Sucesso ao realizar o login' // GJson
        })

        // Extraiam o token da resposta o GJson
        tokenColetadoNaResposta = respostaLogin.json('data.token')
    })

    group('Cadastrar um Novo Produto', () => {
        // Cadastrem um novo produto
        const respostaCadastroProduto = http.post(
            'http://165.227.93.41/lojinha/v2/produtos',
            JSON.stringify({
                produtoNome: faker.food.fruit(),
                produtoValor: 50,
                produtoCores: [ 'preto', 'branco' ]
            }),
            {
                headers: {
                    'Content-Type': 'application/json',
                    token: tokenColetadoNaResposta
                }
            }
        )

        // Checks
        // - Status Code
        // - Mensagem
        // - Segunda Cor do Produto
        check(respostaCadastroProduto, {
            'Status code é 201': r => r.status === 201,
            'Mensagem é produto adicionado com sucesso': r => r.json().message === 'Produto adicionado com sucesso',
            'Segunda cor do produto é branco' : r => r.json('data.produtoCores.1') === 'branco',
            'Segunda cor do produto é branco (sem GSON)' : r => r.json().data.produtoCores[1] === 'branco'
        })
    })

    group('User think time após o cadastro', () => {
        sleep(1) // Entenda o comportamento e quem é seu usuário
    })
}