const { assert } = require('chai');
const Counter = require('./Broken Counter - 8 kuy');

describe('test counter', function () {
    var counter = new Counter();

    it('initialize', function () {
        assert.equal(
            counter.getValue(),
            0,
            'Initial counter value must be 0'
        );
    });

    it('increase', function () {
        counter.increase();
        assert.equal(
            counter.getValue(),
            1,
            'Counter value must be increased'
        );
    });

    it('reset', function () {
        counter.reset();
        assert.equal(
            counter.getValue(),
            0,
            'Counter value must be 0 after reset'
        );
    });
});
