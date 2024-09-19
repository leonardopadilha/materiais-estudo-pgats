import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  //duration: '30s',
  iterations: 1,
  thresholds: {
    http_req_failed: ['rate < 0.01'], // Inferior a 1%
    http_req_waiting: ['p(95) >= 10', 'p(95) <= 180', 'avg < 160'] // valores são em ms
  }
};

export default function() {
  const BASE_URL = "http://165.227.93.41/lojinha-web/v2"


  const res = http.get(BASE_URL);
  const pageTitle = res.html().find('h4').text()
  //console.log("Button::::::" + res.html().find('#btn-entrar').text())
  //console.log("Button::::::" + res.html().find('#btn-entrar').attr('name'))
  //console.log("Página:::" + pageTitle)
  //console.log(Object.keys(res))

  check(res, {
    'status code 200': (r) => r.status === 200,
    'page title is correct': () => pageTitle === 'Acessar a Lojinha'
  })

  const login = http.post(`${BASE_URL}/login/entrar`, {
    usuario: 'admin',
    senha: 'admin'
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  
  const cookieJar = http.cookieJar()
  const cookies = cookieJar.cookiesForURL(login.url)

  const productList = http.get(`${BASE_URL}/produto`, {
    cookies: cookies
  })
  check(login, {
    'status code login 200': (r) => r.status === 200,
    'login with success': () => productList.html().find('.container h3').text() === 'Lista de Produtos'
  })

 //sleep(1);
}

// k6 run .\ex02.js --http-debug
// k6 run .\ex02.js --http-debug="full" => Retorna o html da página
// npm install -D @types/k6