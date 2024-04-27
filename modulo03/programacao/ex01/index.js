const calculaIMC = require('./imc');
const prompt = require('prompt-sync')()

 let resposta = '';

 console.log("Exemplo de entrada válida: altura: 1.70 - peso: 60")

do {
    const altura = prompt("Informe sua altura: ")
    const peso = prompt("Informe seu peso: ")

    console.log(calculaIMC(altura, peso))

    resposta = prompt('Deseja realizar calcular o imc novamente? ')
} while (resposta.toLowerCase() === 'sim')

console.log( "Até a próxima!")