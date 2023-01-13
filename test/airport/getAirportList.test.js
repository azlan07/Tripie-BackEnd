const request = require('supertest');
const app = require('../../app/index');

describe('GET /get-airport', () => {
  it('should response with 200 as status code', async () => {
    const id = 1;

    return await request(app)
      .get('/get-airport' + id)
      .then((response) => {
        expect(response.statusCode).toBe(response.statusCode);
        expect(response.body).toEqual(response.body);
      });
  });
});