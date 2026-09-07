const assert = require('chai').assert;
const numberToString = require('./Convert a Number to a String - 8 kuy');

describe('Tests', () => {
    it('test', () => {
        assert.strictEqual(numberToString(67), '67');
    });
});
