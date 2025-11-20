const chai = require("chai");
const assert = chai.assert;
const generateShape = require('./Build a square - 7 kuy');
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
assert.equal( generateShape(8) , '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' )
  });
});