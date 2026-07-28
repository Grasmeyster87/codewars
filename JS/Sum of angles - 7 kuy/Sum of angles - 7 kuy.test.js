const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const angle = require('./Sum of angles - 7 kuy');

describe('Basic tests', () => {
    it('Testing for fixed tests', () => {
        assert.strictEqual(angle(3), 180);
        assert.strictEqual(angle(4), 360);
    });
});
