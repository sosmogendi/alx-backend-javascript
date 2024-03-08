const { expect } = require('chai');
const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Spy', function () {
  it('Ensures math is the same.', () => {
    const spyUtils = chai.spy.on(Utils, 'calculateNumber');
    const spyConsole = chai.spy.on(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(spyUtils).to.have.been.called.once.with.exactly('SUM', 100, 20);
    expect(spyConsole).to.have.been.called.once.with.exactly('The total is: 120');

    spyUtils.restore();
    spyConsole.restore();
  });
});
