const chai = require("chai");
const assert = chai.assert;
const mineLocation = require('./Find the Mine - 6 kuy');

chai.config.truncateThreshold = 0;

function doTest(field, expected) {
  assert.deepStrictEqual(mineLocation(field), expected, `Incorrect result for field: ${JSON.stringify(field)}\n\n`);
}

describe("Submission Tests", function () {
  it("Sample Tests", function () {
    doTest([[1, 0], [0, 0]], [0, 0]);
    doTest([[1, 0, 0], [0, 0, 0], [0, 0, 0]], [0, 0]);
    doTest([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]], [2, 2]);
  });
});