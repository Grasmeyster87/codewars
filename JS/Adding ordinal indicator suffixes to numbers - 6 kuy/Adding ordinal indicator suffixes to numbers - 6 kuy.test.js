const { assert } = require('chai');
const numberToOrdinal = require('./Adding ordinal indicator suffixes to numbers - 6 kuy');

describe("Tests", () => {
  it("test", () => {
assert.equal(numberToOrdinal(1), '1st');
assert.equal(numberToOrdinal(2), '2nd');
assert.equal(numberToOrdinal(3), '3rd');
assert.equal(numberToOrdinal(4), '4th');

  });
});