const request = require('supertest');
const app = require('../../app');

describe('Get paginated movie', () => {
  test('GET /movies returns paginated list', async () => {
    const res = await request(app).get('/movies?page=1');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.meta.page).toBe(1);
  });

  test('Get valid movie id', async () => {
    const res = await request(app).get('/movies/tt2655788');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.imdbId).toBe('tt2655788');
  });

  test('Get invalid movie id', async () => {
    const res = await request(app).get('/movies/abcd1234');
    expect(res.statusCode).toBe(404);
    expect(res.body.success).toBe(false);
    expect(res.body.error).toHaveProperty('message', 'no movie found');
  });

  test('Get movies by year', async () => {
    const res = await request(app).get('/movies/year/2016?page=1&order=asc');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.meta.page).toBe(1);
  });

  test('Get movies by genre', async () => {
    const res = await request(app).get('/movies/genre/History?page=1');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.meta.page).toBe(1);
  });
});