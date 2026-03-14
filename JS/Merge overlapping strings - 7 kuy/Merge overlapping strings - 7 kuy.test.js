const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const lmergeStrings = require('./Merge overlapping strings - 7 kuy');


describe("mergeStrings", function() {
  it('"Example 1"', () => {
    const expected = 'abcdefgh'
    const actual = mergeStrings('abcde', 'cdefgh')
    assert.equal(actual, expected)
  })

  it('"Example 2"', () => {
    const expected = 'abaabab'
    const actual = mergeStrings('abaab', 'aabab')

    assert.equal(actual, expected)
  })
});