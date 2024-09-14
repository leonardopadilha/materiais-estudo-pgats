import http from 'k6/http';
import { sleep } from 'k6';
import { numeroAleatorioMenorQue } from './utils/numeros.js';

export const options = {
  vus: 1,
  iterations: 1
  //duration: '10s',
}
export default function() {
  http.get('http://165.227.93.41/lojinha-web/');
  
  sleep(numeroAleatorioMenorQue(5.1)); // User think time
}
