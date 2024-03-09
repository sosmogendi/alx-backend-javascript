/**
 * Integration tests for the API endpoints.
 * These tests verify that the API responds correctly to various requests.
 */
const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  // Base URL for the API
  const API_URL = 'http://localhost:7865';

  /**
   * Test case for GET / endpoint.
   * Verifies that the API responds with the correct message for the root endpoint.
   */
  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  /**
   * Test case for GET /cart/:id endpoint with a valid :id.
   * Verifies that the API responds with the correct message for a valid cart ID.
   */
  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  /**
   * Test case for GET /cart/:id endpoint with a negative :id.
   * Verifies that the API responds with a 404 status code for negative cart IDs.
   */
  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  /**
   * Test case for GET /cart/:id endpoint with a non-numeric :id.
   * Verifies that the API responds with a 404 status code for non-numeric cart IDs.
   */
  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  /**
   * Test case for POST /login endpoint.
   * Verifies that the API responds with the correct message for a valid login request.
   */
  it('POST /login returns valid response', (done) => {
    request.post(`${API_URL}/login`, { json: { userName: 'Pinkbrook' } }, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Pinkbrook');
      done();
    });
  });

  /**
   * Test case for GET /available_payments endpoint.
   * Verifies that the API responds with the correct payment methods.
   */
  it('GET /available_payments returns valid response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });
});
