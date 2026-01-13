const { assert } = require('chai');
const exchangeWith = require('./Array Exchange - 6 kuy');

describe('Fixed tests', () => {
    it('Tests', () => {
        const a = ['1', '2', '3', '4', '5', '6', '7'];
        const b = ['a', 'b', 'c'];
        exchangeWith(a, b);
        assert.deepEqual(a, ['c', 'b', 'a']);
        assert.deepEqual(b, ['7', '6', '5', '4', '3', '2', '1']);
    });
});
