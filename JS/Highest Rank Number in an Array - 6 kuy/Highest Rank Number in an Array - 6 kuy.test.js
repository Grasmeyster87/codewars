const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const highestRank = require("./Highest Rank Number in an Array - 6 kuy");

describe("Sample tests", function() {
  it("should test", function() {
    var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
    assert.strictEqual( highestRank(arr), 12);
  });
});
