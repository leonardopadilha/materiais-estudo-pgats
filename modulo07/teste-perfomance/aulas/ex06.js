import http from 'k6/http'
import { sleep, check } from 'k6'

export const options = {
    vus: 1,
    iterations: 1,
    thresholds: {
        http_req_failed: [ 'rate < 0.01' ]
    }
}

export default function() {
    const respostaHomePageLojinha = http.get('http://165.227.93.41/lojinha-web/v2/')

    check(respostaHomePageLojinha, {
        'Checkar se o status é igual a 200': r => r.status === 200,
        'checkar que o título da página é Lojinha': r => r.html().find('title').text() === 'Lojinha'
    })

    const corpoDaRequestLogin = {
        usuario: __ENV.USUARIO_LOGIN,
        senha: __ENV.USUARIO_SENHA
    }

    const opcoesDaRequestDoLogin = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    // respostaLogin não é necessário, deixei apenas para se lembrar em casos onde queiram extrair o cookie
    const respostaLogin = http.post('http://165.227.93.41/lojinha-web/v2/login/entrar', corpoDaRequestLogin, opcoesDaRequestDoLogin)

    // Cookies que mostram que fiz login
    // const cookieJar = http.cookieJar()
    // const cookieQuePegueiNoLogin = cookieJar.cookiesForURL(respostaLogin.url())

    http.get('http://165.227.93.41/lojinha-web/v2/produto', {
        //cookies: cookieQuePegueiNoLogin // Prova que eu sou o Admin e já fiz login
    })

    http.get('http://165.227.93.41/lojinha-web/v2/produto/novo', {
        // cookies: cookiesQuePegueiNoLogin // Prova que eu sou o Admin e já fiz login
    })

    const corpoDaRequestSalvarProduto = {
        produtonome: 'trackinas do k6',
        produtovalor: '50',
        produtocores: 'marrom'
    }

    const opcoesDaRequestSalvarProduto = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    const respostaSalvarProduto = http.post('http://165.227.93.41/lojinha-web/v2/produto/salvarproduto', corpoDaRequestSalvarProduto, opcoesDaRequestSalvarProduto)
    check(respostaSalvarProduto, {
        'Validando que o produto foi salvo': r => r.headers['Refresh'].includes('Produto adicionado com sucesso')
    })

    // Abrir o produto que acabou de criado
    // 0;url=http://165.227.93.41/lojinha-web/v2/produto/editar/964829?message=Produto adicionado com sucesso
    const respostaAbrirEdicaoProduto = http.get(encodeURI(respostaSalvarProduto.headers['Refresh'].replace('0;url=', '')))

    check(respostaAbrirEdicaoProduto, {
        'Validando que entrei na página de edição do produto': r => r.html().find('#produtonome').val() === 'trackinas do k6'
    })

    sleep(1)
}

// Interação de página web via protocolo
// K6 run ex06.js -e USUARIO_LOGIN="cgts" -e USUARIO_SENHA="123456"
// k6 run --out web-dashboard=report=result.html ex06.js -e USUARIO_LOGIN="cgts" -e USUARIO_SENHA="123456"

// console.log(respostaHomePageLojinha.status)
// console.log(respostaHomePageLojinha.status_text)
// console.log(respostaHomePageLojinha.remote_ip)
// console.log(respostaHomePageLojinha.html().find('h4').text())
// console.log(respostaHomePageLojinha.html().find('title').text())
// console.log(respostaHomePageLojinha.html().find('#btn-entrar').attr('name'))
// console.log(respostaHomePageLojinha.html().find('#btn-entrar').text())
// console.log(respostaHomePageLojinha.body)