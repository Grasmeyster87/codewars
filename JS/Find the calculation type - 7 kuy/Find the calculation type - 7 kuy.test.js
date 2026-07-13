const { assert } = require('chai');
const calcType = require('./Find the calculation type - 7 kuy');

describe('Sample tests', function () {
    it('addition', function () {
        assert.strictEqual(calcType(1, 2, 3), 'addition');
    });
    it('multiplication', function () {
        assert.strictEqual(calcType(10, 4, 40), 'multiplication');
    });
    it('subtraction', function () {
        assert.strictEqual(calcType(10, 5, 5), 'subtraction');
    });
    it('division', function () {
        assert.strictEqual(calcType(9, 5, 1.8), 'division');
    });
});
