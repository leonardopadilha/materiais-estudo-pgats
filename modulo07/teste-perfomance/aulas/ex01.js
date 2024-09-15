import http from 'k6/http';
import { sleep } from 'k6';
import { numeroAleatorioMenorQue } from './utils/numeros.js';

export const options = {
  vus: 1,
  iterations: 1,
  //duration: '10s',
  thresholds: {
    http_req_waiting: ['p(90) >= 10', 'p(90) <= 160', 'avg < 60'] // valores são em ms
  }
}
export default function() {
  http.get('http://165.227.93.41/lojinha-web/');
  
  sleep(numeroAleatorioMenorQue(5.1)); // User think time
}
