const request = require('supertest');
const app = require('../../src/HolaMundoApi/index');

describe('GET /', () => {
  it('responde 200 y contiene "Hola Mundo"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Hola Mundo/);
  });
});
