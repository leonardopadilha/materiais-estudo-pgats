class Validacoes {
    #textoInvertido = '';
    retornaTextoMaiusculo(texto) {
        return texto.toUpperCase();
    };

    retornaTextoMinusculo(texto) {
        return texto.toLowerCase()
    };

    #retornaTextoSemCaracteres(texto) {
        let novoTextoII = this.retornaTextoMinusculo(texto)
        let textoSemAcentuacao = novoTextoII.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let textoSemCaractere = textoSemAcentuacao.replace(/[,!,-]/g, "")
        let textoSeparado = textoSemCaractere.split(' ')
        let textoFinal = textoSeparado.join('')
        return textoFinal;
    }

    ehPalindromo(texto) {

        let textoFinal = this.#retornaTextoSemCaracteres(texto)

        if (textoFinal[0] !== textoFinal[textoFinal.length - 1]) {
            return false;
        } else {
            for (let j = textoFinal.length - 1; j >= 0; j--) {
              this.#textoInvertido += textoFinal[j];
            };
        };

        return textoFinal === this.#textoInvertido ? true : false;
    };
};

module.exports = Validacoes;