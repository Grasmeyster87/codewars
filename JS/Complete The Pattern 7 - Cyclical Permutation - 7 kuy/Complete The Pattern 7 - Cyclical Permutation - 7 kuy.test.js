const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("pattern", function() {

  it("sample tests", function() {
      tester(  7,"1234567\n2345671\n3456712\n4567123\n5671234\n6712345\n7123456");
      tester(  1,"1");
      tester(  4,"1234\n2341\n3412\n4123");
      tester(  0,"");
      tester(-25,"");
  });
  
  function tester(input, expected) {
      assert.strictEqual(pattern(input), expected, `Failed for input: ${input}\n\n`);
  }
});