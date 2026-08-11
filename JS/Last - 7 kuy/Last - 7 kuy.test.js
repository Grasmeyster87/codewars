describe('last (...)', function () {
    const { assert } = require('chai');
    const last = require('./Last - 7 kuy');

    it('single non-iterable argument', function () {
        assert.strictEqual(last(5), 5, 'last(5)');
    });
    it('single string argument', function () {
        assert.strictEqual(last('123'), '3', 'last("123")');
    });
    it('single array argument', function () {
        assert.strictEqual(last([1, 2, 3]), 3, 'last([1, 2, 3])');
    });
    it('single element array', function () {
        assert.strictEqual(last([1]), 1, 'last([1])');
    });
    it('single nested array argument', function () {
        assert.deepEqual(
            last([1, 2, 3, [4, 5]]),
            [4, 5],
            'last([1, 2, 3, [4, 5]])',
        );
    });
    it('multiple arguments', function () {
        assert.strictEqual(last(1, 2, 3), 3, 'last(1, 2, 3)');
    });
    it('multiple iterable arguments', function () {
        assert.strictEqual(last('a', 'b', 'c'), 'c', "last('a', 'b', 'c')");
        assert.deepEqual(last([1], [2], [3]), [3], 'last([1], [2], [3])');
    });
    it('multiple arguments, last is iterable', function () {
        assert.deepEqual(
            last(1, 2, 3, [4, 5]),
            [4, 5],
            'last(1, 2, 3, [4, 5])',
        );
    });
});
