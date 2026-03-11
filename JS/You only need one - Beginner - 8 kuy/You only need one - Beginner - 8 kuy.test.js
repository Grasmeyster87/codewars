const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const check = require('./You only need one - Beginner - 8 kuy');

describe('Basic tests', () => {
    it('Testing for fixed tests', () => {
        assert.strictEqual(check([66, 101], 66), true);
        assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
        assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
        assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
    });
});
