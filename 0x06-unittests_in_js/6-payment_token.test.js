const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
  describe('When success is true', function () {
    it('should resolve with successful response', function (done) {
      getPaymentTokenFromAPI(true)
        .then((res) => {
          expect(res).to.deep.equal({ data: 'Successful response from the API' });
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe('When success is false', function () {
    it('should reject with an error', function (done) {
      getPaymentTokenFromAPI(false)
        .then(() => done(new Error('Promise should have been rejected')))
        .catch((err) => {
          expect(err.message).to.equal('Failed to get payment token from API');
          done();
        });
    });
  });
});
