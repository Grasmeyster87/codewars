const { assert } = require('chai');
const findMissing = require('./Find the missing term in an Arithmetic Progression - 6 kuy');

describe('Example tests', function() {
  it('Testing with [1, 3, 4]', function() {
    assert.strictEqual(findMissing([1, 3, 4]), 2);
  });
});
