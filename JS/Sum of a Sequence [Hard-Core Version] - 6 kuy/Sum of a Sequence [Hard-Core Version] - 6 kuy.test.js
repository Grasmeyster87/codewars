const assert = require('assert');
const sequenceSum = require('./Sum of a Sequence [Hard-Core Version] - 6 kuy');

describe("Basic tests", () => {
  it("should pass basic test cases", () => {
    assert.strictEqual(sequenceSum(2, 6, 2), 12);
    assert.strictEqual(sequenceSum(1, 5, 1), 15);
    assert.strictEqual(sequenceSum(1, 5, 3), 5);
    assert.strictEqual(sequenceSum(-1, -5, -3), -5);
    assert.strictEqual(sequenceSum(16, 15, 3), 0);
    assert.strictEqual(sequenceSum(-24, -2, 22), -26);
    assert.strictEqual(sequenceSum(-2, 4, 658), -2);
    assert.strictEqual(sequenceSum(780, 68515438, 5), 469436517521190);
    assert.strictEqual(sequenceSum(9383, 71418, 2), 1253127200);
    assert.strictEqual(sequenceSum(20, 67338879, 5), 453452442295970);
  });
});