const assert = require('node:assert')
const { isNarcisista } = require('../src/numNarcisista')

describe('Numero Narcisistas', () => {
    describe('#isNarcisista', () => {
        it('Deve retornar o número 234 não é narcisista', () => {
            assert.equal(isNarcisista(234), 'O número 234 não é narcisista')
        })

        it('Deve retornar o número 153 é narcisista', () => {
            assert.equal(isNarcisista(153), 'O número 153 é narcisista')
        })

        it('Deve retornar o número 2135 não é narcisista', () => {
            assert.equal(isNarcisista(2135), 'O número 2135 não é narcisista')
        })

        it('Deve retornar mensagem de erro para o número -2135', () => {
            assert.equal(isNarcisista(-2135), 'O número -2135 não é narcisista')
        })

        it('Deve retornar o número 407 é narcisista', () => {
            assert.equal(isNarcisista(407), 'O número 407 é narcisista')
        })
    })
})