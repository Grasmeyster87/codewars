const assert = require('assert');
const sumTheTreeValues = require('./Sum The Tree');

describe('Sum The Tree', () => {

  it('example 1', () => {
    const tree = {
      value: 10,
      left: { value: 1, left: null, right: null },
      right: { value: 2, left: null, right: null }
    };

    assert.strictEqual(sumTheTreeValues(tree), 13);
  });

  it('example 2', () => {
    const tree = {
      value: 1,
      left: { value: 0, left: null, right: null },
      right: {
        value: 0,
        left: null,
        right: { value: 2, left: null, right: null }
      }
    };

    assert.strictEqual(sumTheTreeValues(tree), 3);
  });

});