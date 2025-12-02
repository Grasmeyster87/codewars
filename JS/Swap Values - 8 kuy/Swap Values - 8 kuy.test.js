const chai = require('chai');
const assert = chai.assert;
const swapValues = require('./Swap Values - 8 kuy');

describe('Tests', () => {
    it('test', () => {
        var arr = [1, 2];
        swapValues(arr);
        assert.equal(arr[0], 2, 'Failed swapping numbers');
        assert.equal(arr[1], 1, 'Failed swapping numbers');
    });
});