import http from 'k6/http'
import { sleep } from 'k6'
import { SharedArray } from 'k6/data'

const dados = new SharedArray('dados', () => JSON.parse(open('./dados/ex08.json')))

export const options = {
    cloud: {
        name: 'Exercício 08',
        projectId: 3712199
    },
    scenarios: {
        ddt: {
            executor: 'shared-iterations',
            vus: 2,
            // Iterations precisam ser maiores ou iguais que o número de vus, sempre refletindo a quantidade de itens no arquivo de dados
            iterations: dados.length
        }
    }
}

export default function() {
    http.get('http://165.227.93.41/lojinha-web/v2')
    http.post(
        'http://165.227.93.41/lojinha-web/v2/login/entrar',
        {
            usuario: dados[__VU - 1].usuarioLogin,
            senha: dados[__VU - 1].usuarioSenha
        },
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    )

    console.log(__VU, {
        usuario: dados[__VU - 1].usuarioLogin,
        senha: dados[__VU - 1].usuarioSenha
    })

    sleep(1)
}