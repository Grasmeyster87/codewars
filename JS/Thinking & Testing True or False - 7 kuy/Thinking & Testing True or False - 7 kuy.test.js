const { assert } = require('chai');
const testit = require('./Thinking & Testing True or False - 7 kuy');

describe('Sample Tests', () => {
    it('Test', () => {
        //Ookokokk?
        assert.strictEqual(testit(0), 0);
        assert.strictEqual(testit(1), 1);
        //return n-1 ?
        assert.strictEqual(testit(2), 1);
        assert.strictEqual(testit(3), 2);
        //return Math.round(n/3) ?
        assert.strictEqual(testit(4), 1);
        assert.strictEqual(testit(5), 2);
        assert.strictEqual(testit(6), 2);
        assert.strictEqual(testit(7), 3);
        //All of the above answers are wrong
        assert.strictEqual(testit(8), 1);
        assert.strictEqual(testit(9), 2);
        assert.strictEqual(testit(10), 2);
        assert.strictEqual(testit(100), 3);
        assert.strictEqual(testit(1000), 6);
        assert.strictEqual(testit(10000), 5);
        //return what ? thinking and testing...
    });
});