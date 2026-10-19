describe('Simple number triangle', () => {
    const { assert, config } = require('chai');
    config.truncateThreshold = 0;
    const solve = require('./Simple number triangle - 6 kuy');

    it('Example tests', () => {
        assert.strictEqual(solve(4n), 14n);
        assert.strictEqual(solve(5n), 42n);
        assert.strictEqual(solve(6n), 132n);
        assert.strictEqual(solve(7n), 429n);
        assert.strictEqual(solve(8n), 1430n);
        assert.strictEqual(solve(20n), 6564120420n);
    });
});
