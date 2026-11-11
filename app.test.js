const request = require('supertest');
const app = require('./server');

describe('Students API', () => {
  it('GET /students', async () => {
    const res = await request(app).get('/students').expect(200);
    expect(res.body.length).toBe(2);
    expect(res.body[0].name).toBe('abc');
  });

  it('POST /students', async () => {
    const res = await request(app).post('/api/students').send({ name: 'abc' }).expect(201);
    expect(res.body.name).toBe('mno');
  });
});
