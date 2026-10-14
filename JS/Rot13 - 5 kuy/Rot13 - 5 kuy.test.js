const assert = require('chai').assert;
const rot13 = require('./Rot13 - 5 kuy');

describe('Tests', function () {
    it('Sample tests', function () {
        for (const [input, expected] of [
            ['test', 'grfg'],
            ['Test', 'Grfg'],
        ]) {
            assert.strictEqual(
                rot13(input),
                expected,
                `Test failed with messsage = '${input}'`,
            );
        }
    });
});