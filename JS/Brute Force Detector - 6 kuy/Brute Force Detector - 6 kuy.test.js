const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const detectBruteForce = require('./Brute Force Detector - 6 kuy');

describe('Brute Force Detector', function () {
    it('catches IP with 3 consecutive failures', function () {
        const logs = [
            '192.168.1.1 LOGIN_FAIL user=admin',
            '192.168.1.1 LOGIN_FAIL user=admin',
            '192.168.1.1 LOGIN_FAIL user=admin',
        ];
        assert.deepEqual(detectBruteForce(logs), ['192.168.1.1']);
    });
    it('success resets the counter', function () {
        const logs = [
            '10.0.0.5 LOGIN_FAIL user=x',
            '10.0.0.5 LOGIN_FAIL user=x',
            '10.0.0.5 LOGIN_SUCCESS user=x',
            '10.0.0.5 LOGIN_FAIL user=x',
        ];
        assert.deepEqual(detectBruteForce(logs), []);
    });
    it('mixed traffic, only some IPs flagged', function () {
        const logs = [
            '1.1.1.1 LOGIN_FAIL user=a',
            '2.2.2.2 LOGIN_FAIL user=b',
            '1.1.1.1 LOGIN_FAIL user=a',
            '2.2.2.2 LOGIN_SUCCESS user=b',
            '1.1.1.1 LOGIN_FAIL user=a',
            '2.2.2.2 LOGIN_FAIL user=b',
        ];
        assert.deepEqual(detectBruteForce(logs), ['1.1.1.1']);
    });
    it('IP with multiple streaks only appears once', function () {
        const logs = [
            '5.5.5.5 LOGIN_FAIL user=x',
            '5.5.5.5 LOGIN_FAIL user=x',
            '5.5.5.5 LOGIN_FAIL user=x',
            '5.5.5.5 LOGIN_SUCCESS user=x',
            '5.5.5.5 LOGIN_FAIL user=x',
            '5.5.5.5 LOGIN_FAIL user=x',
            '5.5.5.5 LOGIN_FAIL user=x',
        ];
        assert.deepEqual(detectBruteForce(logs), ['5.5.5.5']);
    });
    it('empty list returns empty list', function () {
        assert.deepEqual(detectBruteForce([]), []);
    });
    it('results are sorted alphabetically', function () {
        const logs = [
            '9.9.9.9 LOGIN_FAIL user=a',
            '1.1.1.1 LOGIN_FAIL user=b',
            '9.9.9.9 LOGIN_FAIL user=a',
            '1.1.1.1 LOGIN_FAIL user=b',
            '9.9.9.9 LOGIN_FAIL user=a',
            '1.1.1.1 LOGIN_FAIL user=b',
        ];
        assert.deepEqual(detectBruteForce(logs), ['1.1.1.1', '9.9.9.9']);
    });
});
