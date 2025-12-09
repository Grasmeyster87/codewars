const { assert } = require('chai');

describe("Example tests", () => {
  it("should still exhibit the exact same behaviour as the function prior to refactoring", () => {
    tester(9  , "You're a(n) kid"     );
    tester(10 , "You're a(n) kid"     );
    tester(11 , "You're a(n) kid"     );
    tester(12 , "You're a(n) kid"     );
    tester(13 , "You're a(n) teenager");
    tester(14 , "You're a(n) teenager");
    tester(15 , "You're a(n) teenager");
    tester(16 , "You're a(n) teenager");
    tester(17 , "You're a(n) teenager");
    tester(18 , "You're a(n) adult"   );
    tester(19 , "You're a(n) adult"   );
    tester(63 , "You're a(n) adult"   );
    tester(64 , "You're a(n) adult"   );
    tester(65 , "You're a(n) elderly" );
    tester(66 , "You're a(n) elderly" );
    tester(100, "You're a(n) elderly" );
  });
});

function tester(age, expected) {
  const actual = describeAge(age);
  assert.strictEqual(actual, expected, `Testing for age = ${age}\n\n`);
}