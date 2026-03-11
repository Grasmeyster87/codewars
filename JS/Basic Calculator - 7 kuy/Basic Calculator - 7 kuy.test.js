describe('Tests', function () {
    const { assert } = require('chai');
    const calculate = require('./Basic Calculator - 7 kuy');

    it('sample tests', function () {
        doTest(3.2, '+', 8, 11.2);
        doTest(3.2, '-', 8, -4.8);
        doTest(3.2, '/', 8, 0.4);
        doTest(3.2, '*', 8, 25.6);
        doTest(-3, '+', 0, -3);
        doTest(-3, '-', 0, -3);
        doTest(-3, '/', 0, null);
        doTest(-2, '/', -2, 1);
        doTest(-3, '*', 0, 0);
        doTest(-3, 'w', 0, null);
    });

    function doTest(a, op, b, expected) {
        const message = `${a} "${op}" ${b}\n \n`;
        const actual = calculate(a, op, b);
        if (expected === null) assert.isNull(actual, message);
        else assert.approximately(actual, expected, 1e-6, message);
    }
});
