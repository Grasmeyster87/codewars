const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const stray = require('./Find the stray number - 7 kuy');

describe('Sample Tests', () => {
    it('Should pass Sample Tests', () => {
        assert.strictEqual(stray([1, 1, 2]), 2);
        assert.strictEqual(stray([1, 2, 1]), 2);
        assert.strictEqual(stray([2, 1, 1]), 2);
    });
});
