const chai = require('chai');
const assert = chai.assert;
require('./Palindromes Below - 6 kuy'); // подключаем саму реализацию

describe('palindromeBelow', () => {
  it('binary base', () => {
    assert.deepEqual((4).palindromeBelow(2), [1, 3]);
  });

  it('decimal base', () => {
    assert.deepEqual(
      (15).palindromeBelow(10),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
    );
  });
});