const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const mouthSize = require('./The Wide-Mouthed frog - 8 kuy');

describe('The Wide-Mouthed frog! ', () => {
    it('Testing for fixed tests', () => {
        assert.strictEqual(mouthSize('toucan'), 'wide');
        assert.strictEqual(mouthSize('ant bear'), 'wide');
        assert.strictEqual(mouthSize('alligator'), 'small');
    });
});
