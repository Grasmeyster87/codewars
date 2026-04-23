const { assert } = require('chai');
const calculateSpecial = require('./N-Parasitic Numbers Ending in N');

describe('Tests', () => {
    it('The smallest 4-parasitic number which ends with a 4 in base 10', () => {
        assert.strictEqual('102564', calculateSpecial(4, 10));
    });

    it('The smallest 4-parasitic number which ends with a 4 in base 16', () => {
        assert.strictEqual('104', calculateSpecial(4, 16));
    });
});
