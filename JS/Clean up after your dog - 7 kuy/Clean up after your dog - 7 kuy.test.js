const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const crap = require('./Clean up after your dog - 7 kuy');

describe("Clean up after your dog", () => {
  it("Fixed tests", () => {
    doTest([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2, "Clean");
    doTest([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1, "Cr@p");
    doTest([['_','_'], ['_','@'], ['D','_']], 2, 2, "Dog!!");
    doTest([['_','_','_','_'], ['_','_','_','@'], ['_','_','_', '_']], 1, 1, "Clean");
    doTest([['_','_','_','_'], ['_','_','_','_'], ['_','_','_', '_']], 2, 2, "Clean");
    doTest([['@','@'], ['@','@'], ['@','@']], 3, 2, "Clean");
    doTest([['@','@'], ['@','@'], ['@','D']], 2, 2, "Dog!!");
    doTest([['@','_'], ['_','_']], 2, 0, "Cr@p");
    doTest([['_','_','_','_'], ['_','_','_','_']], 0, 1, "Clean");
    doTest([['@','_'], ['_','D']], 2, 0, "Dog!!");
    doTest([['_'], ['_'], ['_']], 0, 0, "Clean");
  });
  function doTest(garden, bags, cap, expected) {
    assert.strictEqual(crap(garden.slice(), bags, cap), expected, `Testing for garden = ${JSON.stringify(garden)}, bags = ${bags}, cap = ${cap}`);
  }
});