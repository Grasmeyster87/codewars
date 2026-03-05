const { assert } = require('chai');
const calculateTotal = require('./Reducing Problems - Bug Fixing - 8 kuy');

describe('Example tests', () => {
    it('Fixed Tests', () => {
        assert.strictEqual(calculateTotal([1, 2, 2], [1, 0, 0]), true, 'Calculate the Winner!');
        assert.strictEqual(calculateTotal([6, 45, 1], [1, 55, 0]), false, 'Calculate the Winner!');
        assert.strictEqual(calculateTotal([57, 2, 1], []), true, 'Calculate the Winner!');
        assert.strictEqual(calculateTotal([], [3, 4, 3]), false, 'Calculate the Winner!');
    });
});
