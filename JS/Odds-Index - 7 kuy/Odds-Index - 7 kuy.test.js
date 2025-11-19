const chai = require('chai');
const assert = chai.assert;
const oddBall = require('./Odds-Index - 7 kuy');
chai.config.truncateThreshold = 0;

function doTest(arr, expected) {
    assert.equal(oddBall(arr), expected, `Incorrect result for arr: ${JSON.stringify(arr)}\n\n`);
}

describe("Odds-Index", function () {

    it("Sample Tests", function () {
        doTest(["even", 4, "even", 7, "even", 55, "even", 6, "even", 10, "odd", 3, "even"], true);
        doTest(["even", 4, "even", 7, "even", 55, "even", 6, "even", 9, "odd", 3, "even"], false);
        doTest(["even", 10, "odd", 2, "even"], true);
    });
});