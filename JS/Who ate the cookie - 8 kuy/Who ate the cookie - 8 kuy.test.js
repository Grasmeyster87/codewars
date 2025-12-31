const { assert } = require('chai');
const cookie = require("./Who ate the cookie - 8 kuy");


describe('Example tests', () => {
  it('should return correct messages for given inputs', () => {
    assert.strictEqual(cookie("Ryan"), "Who ate the last cookie? It was Zach!");
    assert.strictEqual(cookie(26), "Who ate the last cookie? It was Monica!");
    assert.strictEqual(cookie(2.3), "Who ate the last cookie? It was Monica!");
    assert.strictEqual(cookie(true), "Who ate the last cookie? It was the dog!");
  });
});
