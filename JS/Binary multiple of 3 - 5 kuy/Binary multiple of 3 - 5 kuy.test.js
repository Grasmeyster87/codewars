const { assert } = require('chai');
const multipleOf3Regex = require('./Binary multiple of 3 - 5 kuy');

describe('Tests', () => {
    it('Example tests', () => {
        assert.notMatch(' 0', multipleOf3Regex);
        assert.notMatch('abc', multipleOf3Regex);
        assert.match('000', multipleOf3Regex);

        assert.match('110', multipleOf3Regex);
        assert.notMatch('111', multipleOf3Regex);
        assert.match((12345678).toString(2), multipleOf3Regex);
    });
});
