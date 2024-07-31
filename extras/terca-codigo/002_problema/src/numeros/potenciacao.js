/*
Neste kata, você deve elevar ao quadrado cada dígito de um número e concatená-los. Por exemplo, 
se executarmos 9119 na função, sairá 811181, porque 9 ao quadrado é 81, 1 ao quadrado é 1, 1 ao quadrado
é 1 e 9 ao quadrado é 81 (81+1+1+81)
*/

function potenciacao(numero) {
    if (numero < 0) {
        return 0
    }

    const numeroElevado = []
    const novoNumero = numero.toString().split("")

    novoNumero.forEach(num => {
        numeroElevado.push(Number(num) ** 2)
    });
    return numeroElevado.join("") 
}

module.exports = {
    potenciacao
}