const request = require('supertest');
const server = require('../server');

describe('Default test', () => {
  it('[GET]: /suma', async () => {
    await request(server)
      .get('/api/sum')
      .expect(200)
      .expect(res => {
        const { text } = res;
        expect(text).toBe('La suma de 5 + 4 = 9');
      });
  });

  it('[GET]: /multiply', async () => {
    await request(server)
      .get('/api/multiply')
      .expect(200)
      .expect(res => {
        const { text } = res;
        expect(text).toBe('La multiplicación de 5 * 9 = 45');
      });
  });
});
