'use strict';

const supertest = require('supertest');
const server = require('../server.js');

const request = supertest(server);

describe('basic server functions as expected', () => {

  test('request to goodbye route sends string goodbye', async () => {
    const response = await request.get('/goodbye');
    expect(response.text).toBe('goodbye');
  });
  test('request to hello route sends string hello with a timestamp' , async () => {
    const response = await request.get('/hello');
    expect(response.text).toContain('hello');
  });

  test('handles undefined routes', async () =>{
    const response = await request.get('/bananas');
    expect(response.status).toEqual(404);
  })
})