class Calculadora {
    somar(primeiroNumero, segundoNumero) {
        return primeiroNumero + segundoNumero;
    }

    static multiplicar(primeiroNumero, segundoNumero) {
        return primeiroNumero * segundoNumero;
    }

    divisao(primeiroNumero, segundoNumero) {
        return primeiroNumero / segundoNumero;
    }
}

module.exports = {
    Calculadora
}