const { assert, config } = require('chai');
config.truncateThreshold = 0;
const sortItOut = require('./Sorting the Odd way! - 7 kuy');

describe('Sorting the odd way', () => {
    it('example tests', () => {
        assert.deepEqual(
            sortItOut([1, 2, 3, 4, 5, 6, 7, 8, 9]),
            [1, 3, 5, 7, 9, 8, 6, 4, 2],
        );
        assert.deepEqual(sortItOut([32, 5, 10]), [5, 32, 10]);
        assert.deepEqual(
            sortItOut([1, 3, 5, 7, 9, 8, 6, 4, 2]),
            [1, 3, 5, 7, 9, 8, 6, 4, 2],
        );
        assert.deepEqual(
            sortItOut([26, 243, 52, 2, 432414, 1, 11, 46, 32]),
            [1, 11, 243, 432414, 52, 46, 32, 26, 2],
        );
        assert.deepEqual(
            sortItOut([19, 65, 88, 112, 60, 14, 33, 49, 88]),
            [19, 33, 49, 65, 112, 88, 88, 60, 14],
        );
        assert.deepEqual(sortItOut([]), []);
        assert.deepEqual(
            sortItOut([68, 25, 99, 50, 10, 67, 2, 5, 8, 34, 67]),
            [5, 25, 67, 67, 99, 68, 50, 34, 10, 8, 2],
        );
        assert.deepEqual(
            sortItOut([3.4, 5.6, 89, 513.1, 9]),
            [3.4, 5.6, 9, 89, 513.1],
        );
        assert.deepEqual(
            sortItOut([11, 22, 33, 44, 55, 55, 90.4, 4, 78]),
            [11, 33, 55, 55, 90.4, 78, 44, 22, 4],
        );
        assert.deepEqual(
            sortItOut([13, 2, 24.0, 66, 105, 369, 6, 42, 57, 63, 101]),
            [13, 57, 63, 101, 105, 369, 66, 42, 24, 6, 2],
        );
        assert.deepEqual(
            sortItOut([6.6, 5.5, 1.1, 2.2, 3.3, 4.4]),
            [1.1, 3.3, 5.5, 6.6, 4.4, 2.2],
        );
    });
});
