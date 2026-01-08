const { assert } = require('chai');
const luckCheck = require('./Who ate the cookie - 8 kuy');

describe('Sample tests', function () {
    it('should return the correct values', function () {
        assert.strictEqual(
            luckCheck('683179'),
            true,
            "The function doesn't recognise a lucky ticket number"
        );
        assert.strictEqual(
            luckCheck('683000'),
            false,
            "The function doesn't return true for a wrong number"
        );
    });
    it('should throw an error for string with illegal characters', function () {
        assert.throws(
            () => luckCheck('6F43E8'),
            undefined,
            undefined,
            'It should throw an error for invalid input'
        );
    });
});
