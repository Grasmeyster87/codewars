const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const powers = require('./Sum of powers of 2 - 7 kuy');

describe("Sum of powers of 2", function () {
    it("given 1", function () {
        assert.deepEqual(powers(1), [1]);
    });

    it("given 2", function () {
        assert.deepEqual(powers(2), [2]);
    });

    it("given 6", function () {
        assert.deepEqual(powers(6), [2, 4]);
    });
});
