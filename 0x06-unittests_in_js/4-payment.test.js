const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('Stubs', function () {
  it('Ensures math is the same.', function () {
    // Stub Utils.calculateNumber to always return 10
    const stubUtils = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    const spyConsole = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub is being called with the correct arguments
    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Verify that console.log is logging the correct message
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore the stub and the spy
    stubUtils.restore();
    spyConsole.restore();
  });
});
