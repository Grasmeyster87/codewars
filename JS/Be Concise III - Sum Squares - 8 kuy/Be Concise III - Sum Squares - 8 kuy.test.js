const { assert } = require('chai');
const sumSquares = require('./Be Concise III - Sum Squares - 8 kuy');

describe("Your refactored solution", () => {
    it("should behave in exactly the same way as the program prior to refactoring for the range of inputs tested", () => {
        assert.strictEqual(sumSquares([1, 2, 3, 4, 5]), 55);
        assert.strictEqual(sumSquares([7, 3, 9, 6, 5]), 200);
        assert.strictEqual(sumSquares([11, 13, 15, 18, 2]), 843);
        assert.strictEqual(sumSquares([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]), 110);
    });
});