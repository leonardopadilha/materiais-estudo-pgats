const assert = require('node:assert');
const Validacoes = require('../../src/validacoesTextos/Validacoes');

describe('validacoesTextos', () => {
    const  validacao = new Validacoes();

    describe('validacoes', () => {
        context('Quando informo um texto em minúsculo', () => {
            it('Então o texto é retornado em maiúsculo', () => {
                let textoEsperado = 'TEXTO DE TESTE';
                let textoMaiusculo = validacao.retornaTextoMaiusculo( 'texto de teste' );
                assert.deepStrictEqual(textoMaiusculo, textoEsperado);
            });
        });

        context('Quando informo um texto em maiúsculo', () => {
            it('Então o texto é retornado em minúsculo', () => {
                let textoEsperado = 'novo texto de teste';
                let textoMinusculo = validacao.retornaTextoMinusculo( 'NOVO TEXTO DE TESTE' );
                assert.deepStrictEqual(textoMinusculo, textoEsperado);
            });
        });

        context('Quando informo um texto que não é palíndromo', () => {
            it('Então deve ser retornado false', () => {
                let texto = "casa";
                let naoEhPalindromo = validacao.ehPalindromo(texto);
                assert.deepEqual(naoEhPalindromo, false);
            });
        });

        context('Quando informo um texto que é palíndromo', () => {
            it('Então deve ser retornado true', () => {
                let texto = "Socorram-me subi no ônibus em Marrocos!";
                let ehPalindromo = validacao.ehPalindromo(texto);
                assert.deepEqual(ehPalindromo, true);
            })
        })
    })
})