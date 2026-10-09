const chai = require('chai');
const assert = chai.assert;
const substring = require('./Longest 2-character substring - 6 kuy');

describe('test suite', function () {
    it('sample tests', function () {
        doTest('', '');
        doTest('a', 'a');
        doTest('aa', 'aa');
        doTest('aaa', 'aaa');
        doTest('ab', 'ab');
        doTest('aba', 'aba');
        doTest('abc', 'ab');
        doTest('abcba', 'bcb');
        doTest('bbacc', 'bba');
        doTest('ccddeeff', 'ccdd');
        doTest('bbacddddcdd', 'cddddcdd');
        doTest(
            'abcddeejabbedsajaajjaajjajajajjajjaaacedajajaj',
            'ajaajjaajjajajajjajjaaa',
        );
        doTest('112233', '1122');
        doTest('aabb112222ccccdef', '2222cccc');
        doTest('11111', '11111');
        doTest('aabacacacacacacac', 'acacacacacacac');
    });

    const { assert, config } = require('chai');
    config.truncateThreshold = 0;

    function doTest(input, expected) {
        const message = `input = ${JSON.stringify(input)}\n \n`;
        const actual = substring(input);
        assert.strictEqual(actual, expected, message);
    }
});
