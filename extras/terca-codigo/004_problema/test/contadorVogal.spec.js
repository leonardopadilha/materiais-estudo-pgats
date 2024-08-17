
import { contador } from '../src/contadorVogal.js';
import assert from 'node:assert/strict'

describe('Contador de vogais', () => {
    it('Deve retornar o total de 2 vogais', () => {
        const resultado = contador('tercas')
        assert.equal(resultado, 2);
    });

    it('Deve retornar o total de 10 vogais', () => {
        const resultado = contador('uva bonita e elegante')
        assert.equal(resultado, 10);
    });

    it('Deve retornar o total de 0 vogais', () => {
        const resultado = contador('qhftwklmpfrz')
        assert.equal(resultado, 0);
    });

    it('Deve retornar 0 vogais', () => {
        const resultado = contador('qhftwk lmpfrz')
        assert.equal(resultado, 0);
    });
});