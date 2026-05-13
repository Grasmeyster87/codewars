const chai = require("chai");
const assert = chai.assert;
const findQuarterNotes = require('./Music 1 How Many Quarter Notes');

describe("Sample Tests", function() {
  it("Standard time signatures", function() {
    assert.strictEqual(findQuarterNotes("4/4"), 4);
    assert.strictEqual(findQuarterNotes("3/4"), 3);
  });
  
  it("Eighth-note denominators", function() {
    assert.strictEqual(findQuarterNotes("6/8"), 3);
    assert.strictEqual(findQuarterNotes("9/8"), 4);
  });
  
  it("Very small values", function() {
    assert.strictEqual(findQuarterNotes("1/8"), 0);
    assert.strictEqual(findQuarterNotes("1/16"), 0);
  });
  
  it("Invalid denominators", function() {
    assert.isNull(findQuarterNotes("9/0"));
    assert.isNull(findQuarterNotes("7/3"));
    assert.isNull(findQuarterNotes("6/5"));
    assert.isNull(findQuarterNotes("5/6"));
    assert.isNull(findQuarterNotes("3/7"));
    assert.isNull(findQuarterNotes("0/9"));
  });

  it("Valid sub 4 denominators", function() {
    assert.strictEqual(findQuarterNotes("7/1"), 28);
    assert.strictEqual(findQuarterNotes("6/2"), 12);
  });
});