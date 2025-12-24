const { assert } = require('chai');
const findSquares = require('./Squares in a Rectangle - 6 kuy');

describe('Basic Tests', function () {
    it('Test 3,2', function () {
        assert.equal(findSquares(3, 2), 8);
    });
    it('Test 4,3', function () {
        assert.equal(findSquares(4, 3), 20);
    });
    it('Test 11,4', function () {
        assert.equal(findSquares(11, 4), 100);
    });
});
