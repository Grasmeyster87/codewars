const { assert } = require('chai');
const mixedFraction = require('./Simple fraction to mixed number converter - 5 kuy');

describe('Tests', () => {
    it('should pass example tests', () => {
        assert.strictEqual(mixedFraction('42/9'), '4 2/3');
        assert.strictEqual(mixedFraction('6/3'), '2');
        assert.strictEqual(mixedFraction('1/1'), '1');
        assert.strictEqual(mixedFraction('11/11'), '1');
        assert.strictEqual(mixedFraction('4/6'), '2/3');
        assert.strictEqual(mixedFraction('0/18891'), '0');
        assert.strictEqual(mixedFraction('-10/7'), '-1 3/7');
        assert.strictEqual(mixedFraction('-22/-7'), '3 1/7');
        assert.throws(
            () => mixedFraction('0/0'),
            Error,
            undefined,
            'Must raise ZeroDivisionError',
        );
        assert.throws(
            () => mixedFraction('3/0'),
            Error,
            undefined,
            'Must raise ZeroDivisionError',
        );
    });
});
