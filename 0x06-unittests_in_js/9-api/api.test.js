const axios = require('axios');
const { expect } = require('chai');

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('should return welcome message with status code 200', async () => {
      const response = await axios.get('http://localhost:7865');
      expect(response.status).to.equal(200);
      expect(response.data).to.equal('Welcome to the payment system');
    });
  });

  describe('GET /cart/:id', () => {
    it('should return payment methods for cart with valid id (e.g., 12)', async () => {
      const response = await axios.get('http://localhost:7865/cart/12');
      expect(response.status).to.equal(200);
      expect(response.data).to.equal('Payment methods for cart 12');
    });

    it('should return 404 status code for invalid cart id (e.g., non-numeric)', async () => {
      try {
        await axios.get('http://localhost:7865/cart/hello');
      } catch (error) {
        expect(error.response.status).to.equal(404);
      }
    });

    it('should return 404 status code for non-existent cart id (e.g., 999)', async () => {
      try {
        await axios.get('http://localhost:7865/cart/999');
      } catch (error) {
        expect(error.response.status).to.equal(404);
      }
    });

    it('should return 404 status code for empty cart id', async () => {
      try {
        await axios.get('http://localhost:7865/cart/');
      } catch (error) {
        expect(error.response.status).to.equal(404);
      }
    });
  });
});
