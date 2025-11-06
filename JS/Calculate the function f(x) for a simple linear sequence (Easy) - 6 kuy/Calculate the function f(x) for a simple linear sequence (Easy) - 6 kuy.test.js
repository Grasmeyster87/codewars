const { assert } = require('chai');
const getFunction = require('./Calculate the function f(x) for a simple linear sequence (Easy) - 6 kuy'); // импорт должен быть до использования

describe("Tests", () => {
  it("should return correct linear functions", () => {
    assert.strictEqual(getFunction([0, 1, 2, 3, 4]), "f(x) = x");
    assert.strictEqual(getFunction([0, 3, 6, 9, 12]), "f(x) = 3x");
    assert.strictEqual(getFunction([1, 4, 7, 10, 13]), "f(x) = 3x + 1");
    assert.strictEqual(getFunction([1, -3, -7, -11, -15]), "f(x) = -4x + 1");
  });
});