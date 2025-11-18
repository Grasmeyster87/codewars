const chai = require("chai");
const assert = chai.assert;
const sum = require('./Sum Arrays - 8 kuy');
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
assert.equal(sum([]), 0);
assert.equal(sum([1, 5.2, 4, 0, -1]), 9.2);
  });
});