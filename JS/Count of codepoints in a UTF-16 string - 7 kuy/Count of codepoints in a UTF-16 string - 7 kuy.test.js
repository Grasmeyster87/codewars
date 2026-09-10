describe('getRealLength', function () {
    const { strictEqual } = require('chai').assert;
    const getRealLength = require('./Count of codepoints in a UTF-16 string - 7 kuy');


    function doTest(string, expected) {
        const actual = getRealLength(string);
        strictEqual(actual, expected, `for string "${string}"\n`);
    }

    it('sample tests', function () {
        doTest("", 0);
        doTest("abcd", 4);
        doTest("中国", 2);
        doTest("𝓪𝓫𝓬𝓭", 4);
        doTest("𨭎𩷶", 2);
        doTest("😸🦌🚀", 3);
        doTest("↓→↑←", 4);
        doTest("\nabc\ndef\n", 9);
    });
});