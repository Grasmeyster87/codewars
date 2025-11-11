const assert = require('chai').assert;
const solve  = require('./Simple string expansion - 5 kuy');

describe("Basic tests", function(){
  it("should expand '3(ab)' to 'ababab'", function() {
    assert.strictEqual(solve("3(ab)"),"ababab");
  });
  it("should expand '2(a3(b))' to 'abbbabbb'", function() {
    assert.strictEqual(solve("2(a3(b))"),"abbbabbb");
  });
  it("should expand '3(b(2(c)))' to 'bccbccbcc'", function() {
    assert.strictEqual(solve("3(b(2(c)))"),"bccbccbcc");
  });
  it("should expand 'k(a3(b(a2(c))))' to 'kabaccbaccbacc'", function() {
    assert.strictEqual(solve("k(a3(b(a2(c))))"),"kabaccbaccbacc");
  });
});
