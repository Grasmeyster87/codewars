const chai = require('chai');
const { assert } = chai;

const collatz = require('./Broken Collatz - 7 kuy');

describe("collatz()", function() {
    it ("Simple tests", function() {
        assert.equal(collatz(2), 2);
        assert.equal(collatz(4), 3);
        assert.equal(collatz(6), 9);
    });
});