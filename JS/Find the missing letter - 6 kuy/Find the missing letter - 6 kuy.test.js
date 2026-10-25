const { assert } = require('chai');
const findMissingLetter = require('./Find the Nth Catalan number - 6 kuy');

describe('KataTests', function () {
    it('exampleTests', function () {
        assert.strictEqual(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
        assert.strictEqual(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
    });
});
