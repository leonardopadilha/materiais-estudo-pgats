const request = require('supertest')

const rota = "http://localhost:3000"

describe('Suíte de testes da api users...', () => {
    it('Consulta todos os usuários...deve retornar status 200', async () => {
        const response = await request(rota).get('/users')
        expect(response.status).toEqual(200)
        expect(response.body[0].id).not.toBeNull()
        expect(response.body[0].id).toBeGreaterThan(0)
    });
});

