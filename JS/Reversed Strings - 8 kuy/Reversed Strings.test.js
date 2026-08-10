const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const solution = require('./Reversed Strings');

describe('Basic tests', () => {
    it('Testing for fixed tests', () => {
        assert.strictEqual(solution('world'), 'dlrow');
        assert.strictEqual(solution('hello'), 'olleh');
        assert.strictEqual(solution(''), '');
        assert.strictEqual(solution('h'), 'h');
    });
});
