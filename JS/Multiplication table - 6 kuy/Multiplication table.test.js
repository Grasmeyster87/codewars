const chai = require("chai");
const assert = chai.assert;

chai.config.truncateThreshold = 0;
const multiplicationTable = require('./Multiplication table')

function doTest(size, expected) {
  assert.deepEqual(multiplicationTable(size), expected, `Incorrect result for size = ${size}\n\n`);
}

describe("Multiplication table", function(){
  it("Sample Tests", function(){
    doTest(3, [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
  });
});