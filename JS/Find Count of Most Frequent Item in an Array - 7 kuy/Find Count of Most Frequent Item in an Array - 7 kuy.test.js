const assert = require('chai').assert;
const mostFrequentItemCount = require('./Find Count of Most Frequent Item in an Array - 7 kuy');

describe('Tests', () => {
    it('basic tests', () => {
        assert.equal(mostFrequentItemCount([]), 0);
        assert.equal(mostFrequentItemCount([3]), 1);
        assert.equal(
            mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]),
            5
        );
    });
});