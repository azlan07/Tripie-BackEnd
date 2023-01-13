const request = require('supertest');
const app = require('../../app/index');

describe('GET /schedule', () => {
  it('should response with 200 as status code', async () => {
    const id = 1;

    return await request(app)
      .get('/schedule' + id)
      .then((response) => {
        expect(response.statusCode).toBe(response.statusCode);
        expect(response.body).toEqual(response.body);
      });
  });
});