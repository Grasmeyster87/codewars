const { assert } = require('chai');
const arr2bin = require('./Arguments to Binary addition - 8 kuy');

describe('Tests', () => {
    it('test', () => {
        let actual = arr2bin([1, 2]);
        assertReturn(actual);
        assert.strictEqual(actual, '11');
        assert.strictEqual(arr2bin([1, 2, 3, 4, 5]), '1111');
        assert.strictEqual(arr2bin([1, 10, 100, 1000]), '10001010111');
        assert.strictEqual(arr2bin([null]), '0');
        assert.strictEqual(arr2bin([true, true, false, 15]), '1111');
    });
    function assertReturn(v) {
        assert.isDefined(
            v,
            'Your function did not return any value. Did you log it to the console instead?',
        );
    }
});
