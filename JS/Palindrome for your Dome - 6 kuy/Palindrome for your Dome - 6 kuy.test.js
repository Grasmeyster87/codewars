const {assert} = require("chai");
const palindrome  = require('./Palindrome for your Dome - 6 kuy');

describe("Tests", () => {
  const test = (input, expected) => {
    assert.strictEqual(palindrome(input), expected, `${JSON.stringify(input)} is${expected ? "" : " not"} a palindrome`);
  };

  it("Sample Tests", () => {
    test("", true);
    test("101", true);
    test("911", false);
    test("RotaTor", true);
    test("A man, a plan, a canal - Panama", true);
    test("Abba Zabba, you're my only friend", false);
    test("Under_scores; Serocsrednu", true);
    test("Eva: Can I see bees in a cave?", true)
    test("Madam? I'm Adam!", true)
  });
});