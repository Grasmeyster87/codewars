const { assert } = require('chai');
const duplicateOrUnique = require('./Find number in an array # 1 - 5 kuy');

describe('Basic Tests', function () {
    it('It should works for basic tests', function () {
        assert.strictEqual(duplicateOrUnique([1, 2, 3, 6, 5, 4, 1]), 1);
        assert.strictEqual(duplicateOrUnique([1, 2, 3, 1, 2, 3, 4]), 4);
        assert.strictEqual(duplicateOrUnique([1, 2, 3, 6, 5, 4, 6]), 6);
        assert.strictEqual(
            duplicateOrUnique([3, 6, 9, 2, 5, 8, 1, 4, 8, 7]),
            8,
        );
        assert.strictEqual(
            duplicateOrUnique([
                9, 8, 7, 1, 2, 3, 9, 7, 1, 2, 3, 4, 4, 5, 5, 6, 6,
            ]),
            8,
        );
    });
});
