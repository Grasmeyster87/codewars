const assert = require('chai').assert;
const sum = require('./Simple string expansion - 5 kuy');

describe('Tests', () => {
    it('test', () => {
        assert.strictEqual(sum(7)(5)(), 'Calculate a sum of two items');
    });
});
