const { assert } = require('chai');
const evalObject = require('./Switch_Case - Bug Fixing 6 - 8 kuy');

describe('Example Tests', () => {
    it('should return the evaluated string as a number', () => {
        assert.strictEqual(
            evalObject({ a: 1, b: 1, operation: '+' }),
            2,
            'Return the evaluated string as a number!',
        );
        assert.strictEqual(
            evalObject({ a: 1, b: 1, operation: '-' }),
            0,
            'Return the evaluated string as a number!',
        );
        assert.strictEqual(
            evalObject({ a: 1, b: 1, operation: '/' }),
            1,
            'Return the evaluated string as a number!',
        );
        assert.strictEqual(
            evalObject({ a: 1, b: 1, operation: '*' }),
            1,
            'Return the evaluated string as a number!',
        );
        assert.strictEqual(
            evalObject({ a: 1, b: 1, operation: '%' }),
            0,
            'Return the evaluated string as a number!',
        );
        assert.strictEqual(
            evalObject({ a: 1, b: 1, operation: '^' }),
            1,
            'Return the evaluated string as a number!',
        );
    });
});
