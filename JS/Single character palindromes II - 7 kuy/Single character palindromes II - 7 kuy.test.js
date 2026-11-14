describe("test suite", function() {
    const {assert} = require('chai');
    const solve = require('./Single character palindromes II - 7 kuy');

    it("sample tests", function(){
        assert.isFalse(solve("abba"));
        assert.isTrue(solve("abbaa"));
        assert.isTrue(solve("abbx"));
        assert.isFalse(solve("aa"));
        assert.isTrue(solve("ab"));
        assert.isTrue(solve("abcba"));
    });
});
