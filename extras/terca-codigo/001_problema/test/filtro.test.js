var assert = require('node:assert');
const retornalistaSaida = require("../src/filtro");

describe("#retornalistaSaida()", () => {
    it('deve retornar todos os números inteiros', () => {
        const listaEntrada = [1,2,3,4,5]
        const listaSaida = retornalistaSaida(listaEntrada)
        assert.deepStrictEqual(listaSaida, [ 1, 2, 3, 4, 5 ])
    })

    it('deve retornar as informações sem as strings', () => {
        const listaEntrada = ["1",2,"3",4,5,"texto"]
        const listaSaida = retornalistaSaida(listaEntrada)
        assert.deepStrictEqual(listaSaida, [ 2, 4, 5 ])
    })

    it('deve validar que uma lista não pode estar vazia', () => {
        listaEntrada = []
        assert.throws(() => {
            retornalistaSaida(listaEntrada)
        }, Error("A lista não pode estar vazia"))
    })

    it('deve retornar um array vazio', () => {
        const listaEntrada = ["1", "2", "3", "4", "5","texto"]
        assert.deepStrictEqual(retornalistaSaida(listaEntrada), [])
    })

    it('deve verificar que o novo array é diferente do original', () => {
        const listaEntrada = ["1", 2, "3", "4", 5,"texto"]
        const listaSaida = retornalistaSaida(listaEntrada)
        assert.notDeepStrictEqual(listaSaida, listaEntrada)
    })
})