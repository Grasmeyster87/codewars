const assert = require('chai').assert;
const findOutlier = require('./Find The Parity Outlier - 6 kuy');

describe("Tests", () => {
  it("test", () => {
    assert.equal(findOutlier([0, 1, 2]), 1)
    assert.equal(findOutlier([1, 2, 3]), 2)
    assert.equal(findOutlier([2,6,8,10,3]), 3)
    assert.equal(findOutlier([0,0,3,0,0]), 3)
    assert.equal(findOutlier([1,1,0,1,1]), 0)
  });
});
