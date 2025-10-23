const { assert } = require("chai");
const landPerimeter  = require('./Land perimeter - 5 kuy');

describe("Testing", function() {
  it("Test 1 should return 'Total land perimeter: 60'", () => {
    assert.strictEqual(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]), "Total land perimeter: 60");
  });

  it("Test 2 should return 'Total land perimeter: 52'", () => {
    assert.strictEqual(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"]), "Total land perimeter: 52");
  });

  it("Test 3 should return 'Total land perimeter: 40'", () => {
    assert.strictEqual(landPerimeter(["XXXXXOOO", "OOXOOOOO", "OOOOOOXO", "XXXOOOXO", "OXOXXOOX"]), "Total land perimeter: 40");
  });

  it("Test 4 should return 'Total land perimeter: 54'", () => {
    assert.strictEqual(landPerimeter(["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"]), "Total land perimeter: 54");
  });

  it("Test 5 should return 'Total land perimeter: 40'", () => {
    assert.strictEqual(landPerimeter(["OOOOXO", "XOXOOX", "XXOXOX", "XOXOOO", "OOOOOO", "OOOXOO", "OOXXOO"]), "Total land perimeter: 40");
  });
});