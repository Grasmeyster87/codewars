const { assert } = require('chai');
const makeUpperCase = require('./MakeUpperCase - 8 kuy');

describe('Basic Tests', function () {
    it('should pass the basic tests', function () {
        assert.strictEqual(makeUpperCase(''), '');
        assert.strictEqual(makeUpperCase('hello'), 'HELLO');
        assert.strictEqual(makeUpperCase('Hello'), 'HELLO');
        assert.strictEqual(makeUpperCase('HELLO'), 'HELLO');
    });
});
