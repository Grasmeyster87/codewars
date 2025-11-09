const { assert } = require("chai");
const findLongest  = require('./Most digits');

describe("Tests", () => {
  it("test", () => {
assert.equal(findLongest([1, 10, 100]), 100)
assert.equal(findLongest([9000, 8, 800]), 9000)
assert.equal(findLongest([8, 900, 500]), 900)
  });
});
