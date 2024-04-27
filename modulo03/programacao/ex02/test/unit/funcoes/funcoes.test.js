const chai = require('chai');
const assert = require('node:assert')
const { pesquisarPalavraNoVetor, listarItems } = require('../../../src/funcoes/funcoes');
const { Calculadora } = require('../../../src/calculadora/Calculadora');

const expect = chai.expect;

describe('#Funcoes', () => {
    describe('Pesquisar palavras no vetor', () => {
        const tecnologias = [ "Cypress", "Selenium", "Playwright" ];
        const tecnologiaEncontrada = "Cypress";
        const tecnologiaNaoEncontrada = "Robot";
    
        context('Quando pesquiso por uma palavra que existe no array de tecnologias', () => {
            it('Deve informar que a palavra foi encontrada', (done) => {
                const resultado = pesquisarPalavraNoVetor(tecnologias, tecnologiaEncontrada);
                assert.deepStrictEqual(resultado, `${tecnologiaEncontrada} foi encontrado!!!`);
                done();
            });
        });
    
        context('Quando pesquiso por uma palavra que não existe no array de tecnologias', () => {
            it('Deve informar que a palavra não foi encontrada', (done) => {
                const resultado = pesquisarPalavraNoVetor(tecnologias, tecnologiaNaoEncontrada);
                expect(resultado).to.be.eql(`${tecnologiaNaoEncontrada} não foi encontrado!!!`);
                done();
            });
        });
    });
});

describe('Calculadora', () => {
    describe('somar', () => {
        context('quando realizo a soma', () => {
            it('então a soma deve ser feita com sucesso', () => {
                const resultadoSoma = new Calculadora();
                assert.deepStrictEqual(resultadoSoma.somar(2,2), 4)
            })
        })
    });

    describe('multiplicar', () => {
        context('quando realizo a multiplicação', () => {
            it('então a multiplicação deve ser feita com sucesso', () => {
                const resultadoMultiplicacao = Calculadora.multiplicar(2, 5);
                assert.deepStrictEqual(resultadoMultiplicacao, 10)
            })
        });
    });

    describe('divisao', () => {
        context('quando realizo a divisao', () => {
            it('então a divisao deve ser feita com sucesso', () => {
                const resultadoDivisao = new Calculadora();
                assert.deepStrictEqual(resultadoDivisao.divisao(9, 3), 3)
            })
        });

        context('quando realizo a divisao de zero por zero', () => {
            it('então o resultado deve ser NaN', () => {
                const resultadoDivisao = new Calculadora();
                assert.deepStrictEqual(resultadoDivisao.divisao(0, 0), NaN)
            })
        });

        context('quando realizo a divisao de um número por zero', () => {
            it('então o resultado deve ser infinit', () => {
                const resultadoDivisao = new Calculadora();
                assert.deepStrictEqual(resultadoDivisao.divisao(1, 0), Infinity)
            })
        });
    });
});