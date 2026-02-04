const { assert } = require('chai');
const solve = require('./Simple prime streaming - 6 kuy');

describe('Example tests', function () {
    it('Basic tests', function () {
        assert.strictEqual(solve(2, 2), '57');
        assert.strictEqual(solve(10, 3), '192');
        assert.strictEqual(solve(20, 9), '414347535');
        assert.strictEqual(solve(30, 12), '616771737983');
        assert.strictEqual(solve(40, 8), '83899710');
        assert.strictEqual(solve(50, 6), '031071');
        assert.strictEqual(solve(10000, 5), '02192');
        assert.strictEqual(solve(20000, 5), '09334');
    });
});
