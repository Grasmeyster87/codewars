describe('Testing firstNonRepeatingLetter', () => {
    const { assert } = require('chai');
    const firstNonRepeatingLetter = require('./First non-repeating character - 5 kuy');

    const doTest = (s, expected) =>
        it(`'${s}'`, () => assert.strictEqual(firstNonRepeatingLetter(s), expected));

    describe('Fixed tests', () => {
        describe('Basic tests', () => {
            doTest('a', 'a');
            doTest('stress', 't');
            doTest('moonmen', 'e');
        });
    });
});