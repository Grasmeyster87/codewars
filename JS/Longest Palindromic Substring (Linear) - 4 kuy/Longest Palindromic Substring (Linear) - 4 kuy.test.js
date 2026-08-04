const chai = require('chai');
const assert = chai.assert;
const longest_palindrome = require('./Longest Palindromic Substring (Linear) - 4 kuy');

describe('Example cases', function () {
    it('Strings of odd length', function () {
        assert.strictEqual(longest_palindrome('babad'), 'bab');
        assert.strictEqual(longest_palindrome('madam'), 'madam');
        assert.strictEqual(longest_palindrome('dde'), 'dd');
        assert.strictEqual(longest_palindrome('ababbab'), 'babbab');
        assert.strictEqual(longest_palindrome('abababa'), 'abababa');
    });

    it('Strings of even length', function () {
        assert.strictEqual(longest_palindrome('banana'), 'anana');
        assert.strictEqual(longest_palindrome('abba'), 'abba');
        assert.strictEqual(longest_palindrome('cbbd'), 'bb');
        assert.strictEqual(longest_palindrome('zz'), 'zz');
        assert.strictEqual(longest_palindrome('dddd'), 'dddd');
    });

    it('Edge cases', function () {
        assert.strictEqual(longest_palindrome(''), '');
        assert.strictEqual(
            longest_palindrome('abcdefghijklmnopqrstuvwxyz'),
            'a',
        );
        assert.strictEqual(
            longest_palindrome('ttaaftffftfaafatf'),
            'aaftffftfaa',
        );
        assert.strictEqual(longest_palindrome('bbaaacc'), 'aaa');
        assert.strictEqual(longest_palindrome('m'), 'm');
    });

    it('a taste of performance', function () {
        assert.strictEqual(
            longest_palindrome('a'.repeat(10000)),
            'a'.repeat(10000),
        );
    });
});
