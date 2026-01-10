const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const dutyFree = require('./Luck check - 5 kuy');

describe('Basic tests', () => {
    it('Testing for fixed tests', () => {
        assert.strictEqual(dutyFree(12, 50, 1000), 166);
        assert.strictEqual(dutyFree(17, 10, 500), 294);
        assert.strictEqual(dutyFree(24, 35, 3000), 357);
    });
});
