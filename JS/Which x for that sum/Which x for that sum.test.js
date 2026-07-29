const { assert } = require('chai');
const solve = require("./Which x for that sum");

function assertFuzzy(m, expect) {
    let merr = 1e-12;
    let actual = solve(m);
    assert.closeTo(actual, expect, merr, 
        `Expected value near ${expect}, got ${actual}`);
}

describe("solve", function() {
    it("Basic tests", function() {  
        assertFuzzy(2.00, 0.5);
        assertFuzzy(4.00, 0.6096117967978);
        assertFuzzy(5.00, 0.6417424305044);
    });
});
