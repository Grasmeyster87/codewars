const chai = require("chai");
const assert = chai.assert;
const passwordCracker = require("./Real Password Cracker - 6 kuy.js");

describe("Example tests", function() {
  it("test", function() {
    assert.strictEqual(passwordCracker("e6fb06210fafc02fd7479ddbed2d042cc3a5155e"), "code");
    assert.strictEqual(passwordCracker("a94a8fe5ccb19ba61c4c0873d391e987982fbbd3"), "test");
  });
});