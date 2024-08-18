/*
Um número narcisista (ou número de armstrong) é um número positivo, a soma de seus próprios
dígitos, cada um elevado à potência do número de dígitos em uma determinada base. 
Por exemplo, o número 153 possui 3 dígitos e é narcisista pois 1 ao cubo é 1, 5 ao cubo é 125
e 3 ao cubo é 27, logo, 153 = 1 + 125 + 27.

Fonte: codewars.com

Outros exemplos:
407 (é narcisista) - 407
234 (não é narcisista) - 99
2135 (não é narcisista) - 723
*/

function isNarcisista(num) {
    let soma = 0

    if (num < 0) {
        return `O número ${num} não é narcisista`
    }

    let numStr = num.toString().split("")
    numStr.forEach(numeroElevado => {
       soma += Number(Math.pow(numeroElevado, numStr.length))
    });

    return resultado = soma === num ? `O número ${num} é narcisista` : `O número ${num} não é narcisista` 
}

/* const isNarcisista = numero => {
    return (numero.toString().split("").reduce((acc, it, indice, vt) => Math.pow(it, vt.length) + acc, 0) === numero) ? `O número ${numero} é narcisista` : `O número ${numero} não é narcisista` 
} */

module.exports = {
    isNarcisista
}