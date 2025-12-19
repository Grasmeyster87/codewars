const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const numberOfPairs = require('./Pair of gloves - 6 kuy');

describe('Fixed Tests', () => {
    it('Should work for Example tests', function () {
        let tests = [
            [['red', 'red'], 1],
            [['red', 'green', 'blue'], 0],
            [['gray', 'black', 'purple', 'purple', 'gray', 'black'], 3],
        ];

        tests.forEach((a) => {
            assert.strictEqual(
                numberOfPairs(a[0]),
                a[1],
                `Testing for ${a[0]}`
            );
        });
    });
});
