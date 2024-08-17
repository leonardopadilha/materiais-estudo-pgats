/*
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais
para este kata. O texto de entrada conterá apenas letras minúsculas e/ou espaços.

Fonte: codewars.com
*/

const vogais = ['a', 'e', 'i', 'o', 'u']
export function contador(palavra) {
    let contadorVogal = 0
    for(let i = 0; i < palavra.length; i++) {
        for(let j = 0; j < vogais.length; j++) {
            if (palavra[i] === vogais[j]) {
                contadorVogal++
            }
        }
    }
    return contadorVogal
}