const { assert } = require('chai');
const validPhoneNumber = require('./Valid Phone Number - 6 kuy');

describe("Tests", () => {
  it("should return true for valid phone numbers", () => {
    assert.strictEqual(validPhoneNumber("(123) 456-7890"), true);
  });

  it("should return false for invalid phone numbers", () => {
    assert.strictEqual(validPhoneNumber("(1111)555 2345"), false);
    assert.strictEqual(validPhoneNumber("(098) 123 4567"), false);
    assert.strictEqual(validPhoneNumber("(123)456-7890"), false);
  });
});
