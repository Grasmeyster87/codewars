const assert = require('assert');
const power = require('./The Power of Exponents - 7 kuy');

describe("Tests", () => {
  it("positive exponent", () => {
    assert.strictEqual(power(2, 3), 8);
  });

  it("negative exponent", () => {
    assert.strictEqual(power(4, -2), 0.0625, "power(x,negative) should be equal 1/power(x,positive)");
  });

  it("zero exponent", () => {
    assert.strictEqual(power(5, 0), 1);
  });
});