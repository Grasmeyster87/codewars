const toUnderscore = require('./Convert PascalCase string into snake_case - 5 kuy');

describe('Tests', () => {
    const chai = require('chai'),
        { assert } = chai;
    chai.config.truncateThreshold = 0;

    function doTest(input, expected) {
        const message = `for input ${JSON.stringify(input)}\n`;
        const actual = toUnderscore(input);
        assert.strictEqual(actual, expected, message);
    }

    it('sample tests', () => {
        doTest('A123aaa123AAA123', 'a123aaa123_a_a_a123');
        doTest('AAA', 'a_a_a');
        doTest('TestController', 'test_controller');
        doTest('ThisIsBeautifulDay', 'this_is_beautiful_day');
        doTest('Am7Days', 'am7_days', 'Am7Days should equals am7_days');
        doTest('My3CodeIs4TimesBetter', 'my3_code_is4_times_better');
        doTest(5, '5');
    });
});
