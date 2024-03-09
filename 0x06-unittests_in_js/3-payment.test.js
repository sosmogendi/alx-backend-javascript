const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with the correct arguments', function () {
    // Create a spy for the Utils.calculateNumber function
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    
    // Call the function under test
    sendPaymentRequestToApi(100, 20);
    
    // Assert that Utils.calculateNumber was called with the correct arguments
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the spy
    calculateNumberSpy.restore();
  });
});
