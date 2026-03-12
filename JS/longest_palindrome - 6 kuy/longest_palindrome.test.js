const { assert } = require('chai');
const longestPalindrome = require('./longest_palindrome');

describe('Tests', () => {
    it('tests', () => {
        assert.strictEqual(longestPalindrome('a'), 1);
        assert.strictEqual(longestPalindrome('aa'), 2);
        assert.strictEqual(longestPalindrome('baa'), 2);
        assert.strictEqual(longestPalindrome('aab'), 2);
        assert.strictEqual(longestPalindrome('zyabyz'), 1);
        assert.strictEqual(longestPalindrome('BaaBcd'), 4);
        assert.strictEqual(longestPalindrome('baablkj12345432133d'), 9);

        assert.strictEqual(longestPalindrome(''), 0);
        assert.strictEqual(longestPalindrome('Aa'), 1);
    });
});
