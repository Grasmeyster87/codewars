const {assert} = require("chai");
const unsquareDigits = require("./Going backwards Unsquare every digit - 6 kuy");

describe("Unsquare every digit", function(){
  it("description example tests", function() {
    test( 811181n, 9119n );
    test( 493625n, 765n );
  });
  it("more example tests", function() {
    test( 5n, null );
    test( 49n, 7n ); // not 23
    test( 164n, 18n ); // not 42
    test( 1649n, 47n ); // not 183
  });
});

function test(n,expected) {
  const message = `unsquareDigits(${ n }n)`;
  const actual = unsquareDigits(n);
  assert.strictEqual(actual,expected,message);
}