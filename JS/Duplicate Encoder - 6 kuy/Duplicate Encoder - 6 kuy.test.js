(async () => {
  const chai = await import("chai");
  const { assert } = chai;
  chai.config.truncateThreshold = 0;

  const duplicateEncode = require("./Duplicate Encoder - 6 kuy");

  describe("Duplicate Encoder", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual(duplicateEncode("din"), "(((");
      assert.strictEqual(duplicateEncode("recede"), "()()()");
      assert.strictEqual(duplicateEncode("Success"), ")())())", "should ignore case");
      assert.strictEqual(duplicateEncode("(( @"), "))((");
    });
  });
})();
