const strictEqual = require('chai').assert.strictEqual;
const nthSmallest = require('./Sorted Arrays - 6 kuy');

function doTest(arrays, n, expected) {
    const log = `for arguments:\n${arrays.map((array) => JSON.stringify(array)).join(', ')}, ${n}\n`;
    const actual = nthSmallest(...arrays, n);
    strictEqual(actual, expected, log);
}

describe('standard tests', function () {
    it('should work with one array', function () {
        doTest([[2, 4, 6, 8, 10, 12]], 5, 10);
    });
    it('should work with one array containing repeating numbers', function () {
        doTest([[2, 2, 2, 2, 2]], 3, 2);
    });
    it('should work with two arrays', function () {
        doTest(
            [
                [2, 8, 12],
                [4, 6, 10],
            ],
            5,
            10,
        );
    });
    it('should work with three arrays', function () {
        doTest([[1, 5], [2], [4, 8, 9]], 4, 5);
    });
    it('should work with a bunch of arrays', function () {
        doTest([[1], [2], [3], [4], [5, 6, 7, 8], [9], [10]], 7, 7);
    });
});
