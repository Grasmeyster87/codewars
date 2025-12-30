const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const addFive = require("./Grasshopper - Basic Function Fixer - 8 kuy");

describe('fix add five', () => {
  it('fixed tests', () => {
    assert.equal(addFive(5), 10)
    assert.equal(addFive(0), 5)
    assert.equal(addFive(-5), 0)
  })
})