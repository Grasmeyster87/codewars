const { assert } = require('chai');
const service = require('./Ping-Pong service problem - 6 kuy');

describe('Ping Pong', function () {
    it('description example tests', function () {
        assert.strictEqual(service('0:0'), 'first', `service("0:0")`);
        assert.strictEqual(service('3:2'), 'second', `service("3:2")`);
        assert.strictEqual(service('21:20'), 'first', `service("21:20")`);
        assert.strictEqual(service('21:22'), 'second', `service("21:22")`);
    });
});
