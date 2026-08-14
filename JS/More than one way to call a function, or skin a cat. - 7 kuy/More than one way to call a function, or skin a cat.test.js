const { assert } = require('chai');
const sum = require('./More than one way to call a function, or skin a cat');

it('example tests', () => {
    assert.strictEqual(sum(2, 3), 5, `sum(2,3)`);
    assert.strictEqual(sum(2)(3), 5, `sum(2)(3)`);
});
