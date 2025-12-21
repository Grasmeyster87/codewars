const { assert } = require('chai');
const cleanString = require('./Backspaces in string - 6 kuy');

describe('cleanString', () => {
    it('should work correctly', () => {
        assert.strictEqual(cleanString('abc#d##c'), 'ac');
        assert.strictEqual(cleanString('abc####d##c#'), '');
    });
});
