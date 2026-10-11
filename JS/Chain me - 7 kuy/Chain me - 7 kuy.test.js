describe('Tests', function () {
    const { assert } = require('chai');
    const chain = require('./Chain me - 7 kuy');

    function add10(x) {
        return x + 10;
    }

    function mulBy30(x) {
        return x * 30;
    }

    it('sample tests', function () {
        assert.strictEqual(chain(2, [add10]), 12);
        assert.strictEqual(chain(2, [add10, add10]), 22);
        assert.strictEqual(chain(2, [mulBy30, add10]), 70);
        assert.strictEqual(chain(2, [add10, mulBy30]), 360);
        assert.strictEqual(chain(666, []), 666);
    });
});
