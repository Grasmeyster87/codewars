const { assert } = require('chai');
const checkAlive = require('./Grasshopper - If else syntax debug - 8 kuy');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(checkAlive(5), true)
    assert.strictEqual(checkAlive(0), false)
  });
});