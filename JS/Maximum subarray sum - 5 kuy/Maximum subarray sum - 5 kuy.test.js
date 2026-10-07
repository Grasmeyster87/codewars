const { assert } = require('chai');
const { random, range, sum } = require('lodash');
const maxSequence = require('./Maximum subarray sum - 5 kuy');

describe('Maximum subarray sum', function () {
    it('example tests', function () {
        assert.strictEqual(maxSequence([]), 0);
        assert.strictEqual(maxSequence([1, 2, 3, 4, 5]), 15);
        assert.strictEqual(maxSequence([-1, -2, -3, -4, -5]), 0);
        assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
    });
    it('random tests with positive numbers only', function () {
        for (const i of range(100)) {
            const xs = Array.from({ length: random(i) }, () => random(1, i));
            const expected = sum(xs);
            const actual = maxSequence([...xs]);
            assert.strictEqual(actual, expected);
        }
    });
    it('random tests with negative numbers only', function () {
        for (const i of range(100)) {
            const xs = Array.from({ length: random(i) }, () => random(-1, -i));
            const expected = 0;
            const actual = maxSequence([...xs]);
            assert.strictEqual(actual, expected);
        }
    });
});
