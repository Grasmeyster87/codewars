const { assert, config } = require('chai');
config.truncateThreshold = 0;
const zeros = require('./Number of trailing zeros of N - 5 kuy');

describe('Sample Tests', function () {
    it('Should pass sample tests', function () {
        assert.strictEqual(zeros(0), 0, 'Testing with n = 0');
        assert.strictEqual(zeros(5), 1, 'Testing with n = 5');
        assert.strictEqual(zeros(6), 1, 'Testing with n = 6');
        assert.strictEqual(zeros(30), 7, 'Testing with n = 30');
    });
});
