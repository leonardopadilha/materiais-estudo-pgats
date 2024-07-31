const assert = require('node:assert')
const { potenciacao } = require('../../src/numeros/potenciacao')

describe('Numeros', () => {
    describe('potenciacao()', () => {
        it('Deve retornar o número 811181 para a entrada 9119', () => {
            assert.equal(potenciacao(9119), 811181)
        })

        it('Deve retornar o número 0 para a entrada 0', () => {
            assert.equal(potenciacao(0), 0);
        })

        it('Deve retornar o número 0 para a entrada -5', () => {
            assert.equal(potenciacao(-5), 0);
        })

        it('Deve retornar o número 111111 para a entrada 111111', () => {
            assert.equal(potenciacao(111111), 111111)
        })

        it('Deve retornar o número vazio para a entrada ""', () => {
            assert.equal(potenciacao(""), "")
        })

        it('Deve retornar o número 4964819 para a entrada 7893', () => {
            assert.equal(potenciacao(7893), 4964819)
        })

        it('Deve retornar o número como string "4964819" para a entrada "7893" ', () => {
            assert.equal(potenciacao("7893"), "4964819")
        })
    })
})