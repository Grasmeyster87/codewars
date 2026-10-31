const { assert } = require('chai');
const grille = require('./Grill it! - 6 kuy');

describe('Tests', () => {
    it('test', () => {
        assert.strictEqual(grille('abcdef', 5), 'df');
        assert.strictEqual(grille('', 5), '');
        assert.strictEqual(grille('abc', 1), 'c');
        assert.strictEqual(grille('tcddoadepwweasresd', 77098), 'codewars');
        assert.strictEqual(grille('ab', 255), 'ab');
        assert.strictEqual(grille('ab', 256), '');
        assert.strictEqual(grille('abcde', 32), '');
    });
});
