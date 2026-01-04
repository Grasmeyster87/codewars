const { assert, config } = require('chai');
config.truncateThreshold = 0;
const lettersToNumbers = require('./Sentence Calculator - 6 kuy');

describe('lettersToNumbers', function () {
    it('Basic Tests', function () {
        tester('I Love You', 170);
        tester('ILoveYou', 170);
        tester('ARE YOU HUNGRY?', 356);
        tester('oops, i did it again!', 152);
        tester('Give me 5!', 73);
        tester('Give me five!', 110);
    });

    function tester(input, expected) {
        assert.strictEqual(
            lettersToNumbers(input),
            expected,
            `Failed for input: "${input}"\n`
        );
    }
});
