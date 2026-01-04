describe('Example Tests', function() {
    const {assert} = require('chai');

  it('Examples', function() {
    assert.strictEqual(X('1 0 0 1 0') , 0)
    assert.strictEqual(X('1 0 1 1 1 0 0 1 0 0 0 0') , 1)
    assert.strictEqual(X('1 0 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0') , 0)
  });
});