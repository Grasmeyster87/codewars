const { assert } = require('chai');
const nUpCount = require('./n-upcount - 6 kuy');

describe('Tests', () => {
    const { assert } = require('chai');

    it('sample tests', () => {
        assert.strictEqual(nUpCount([6, 3, 1], 6), 1);
        assert.strictEqual(nUpCount([1, 12, -1], 20), 0);
    });
});
