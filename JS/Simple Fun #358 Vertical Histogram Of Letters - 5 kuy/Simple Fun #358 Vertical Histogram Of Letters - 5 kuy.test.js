const { assert } = require('chai');
const verticalHistogramOf = require('./Simple Fun #358 Vertical Histogram Of Letters - 5 kuy');

describe('Basic Tests', function () {
    it('It should works for basic tests.', function () {
        assert.strictEqual(
            verticalHistogramOf('XXY YY ZZZ123ZZZ AAA BB C'),
            `          *
          *
          *
*       * *
* *   * * *
* * * * * *
A B C X Y Z`,
        );

        assert.strictEqual(verticalHistogramOf('abc123'), '');

        assert.strictEqual(
            verticalHistogramOf('AAABBC'),
            `*
* *
* * *
A B C`,
        );
    });
});
