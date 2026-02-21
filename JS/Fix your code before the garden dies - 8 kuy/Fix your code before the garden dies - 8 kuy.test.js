const assert = require('chai').assert;
const rainAmount = require('./Fix your code before the garden dies - 8 kuy');

describe("rainAmount(mm)", () => {
  
  it("Enough water", () => {
    assert.strictEqual(rainAmount(100), "Your plant has had more than enough water for today!", "rainAmount(100)");
  });

  it("Needs more water", () => {
    assert.strictEqual(rainAmount(39), "You need to give your plant 1mm of water", "rainAmount(39)");
  });
});