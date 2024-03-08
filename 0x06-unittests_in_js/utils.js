// utils.js

const Utils = {
  calculateNumber(type, a, b) {
    const firstInt = Math.round(a);
    const secondInt = Math.round(b);

    switch (type) {
      case 'SUBTRACT':
        return firstInt - secondInt;
      case 'DIVIDE':
        if (secondInt === 0) {
          return 'Error';
        }
        return firstInt / secondInt;
      case 'SUM':
        return firstInt + secondInt;
      default:
        throw new Error('Invalid operation type');
    }
  }
};

module.exports = Utils;
