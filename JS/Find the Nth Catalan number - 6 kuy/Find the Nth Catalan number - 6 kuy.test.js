const { assert } = require('chai');
const catalan = require('./Find the Nth Catalan number - 6 kuy');

describe('Catalan numbers', function () {
    it('description example tests', function () {
        assert.strictEqual(catalan(0), 1n, `catalan(0)`);
        assert.strictEqual(catalan(3), 5n, `catalan(3)`);
        assert.strictEqual(catalan(7), 429n, `catalan(7)`);
        assert.strictEqual(catalan(9), 4862n, `catalan(9)`);
    });
    it('more example tests', function () {
        assert.strictEqual(catalan(1), 1n, `catalan(1)`);
        assert.strictEqual(catalan(2), 2n, `catalan(2)`);
        assert.strictEqual(catalan(4), 14n, `catalan(4)`);
    });
});
