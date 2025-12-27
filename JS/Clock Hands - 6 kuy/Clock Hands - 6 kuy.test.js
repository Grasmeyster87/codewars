const { assert, config } = require('chai');
const clockHands = require('./Clock Hands - 6 kuy');
config.truncateThreshold = 200;

describe('Tests', () => {
    it('clockHands at 0 degrees', () => {
        assert.deepEqual(clockHands(0), [
            '12:00:00',
            '01:05:27',
            '02:10:54',
            '03:16:21',
            '04:21:49',
            '05:27:16',
            '06:32:43',
            '07:38:10',
            '08:43:38',
            '09:49:05',
            '10:54:32',
        ]);
    });

    it('clockHands at 180 degrees', () => {
        assert.deepEqual(clockHands(180), [
            '12:32:43',
            '01:38:10',
            '02:43:38',
            '03:49:05',
            '04:54:32',
            '06:00:00',
            '07:05:27',
            '08:10:54',
            '09:16:21',
            '10:21:49',
            '11:27:16',
        ]);
    });

    it('clockHands at 480 degrees', function () {
        assert.deepEqual(clockHands(480), [
            '12:21:49',
            '01:27:16',
            '02:32:43',
            '03:38:10',
            '04:43:38',
            '05:49:05',
            '06:54:32',
            '08:00:00',
            '09:05:27',
            '10:10:54',
            '11:16:21',
        ]);
    });
});
