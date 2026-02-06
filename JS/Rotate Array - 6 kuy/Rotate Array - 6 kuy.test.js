const { expect } = require("chai");
const rotate = require('./Rotate Array - 6 kuy');


describe("Tests", () => {
  describe("Sample tests", () => {
    it("should pass sample cases", () => {
      expect(rotate([1, 2, 3, 4, 5], 1)).to.deep.equal([5, 1, 2, 3, 4]);
      expect(rotate([1, 2, 3, 4, 5], -1)).to.deep.equal([2, 3, 4, 5, 1]);
      expect(rotate([1, 2, 3, 4, 5], 2)).to.deep.equal([4, 5, 1, 2, 3]);
      expect(rotate([1, 2, 3, 4, 5], -2)).to.deep.equal([3, 4, 5, 1, 2]);
      expect(rotate([1, 2, 3, 4, 5], 3)).to.deep.equal([3, 4, 5, 1, 2]);
      expect(rotate([1, 2, 3, 4, 5], -3)).to.deep.equal([4, 5, 1, 2, 3]);
      expect(rotate([1, 2, 3, 4, 5], 4)).to.deep.equal([2, 3, 4, 5, 1]);
      expect(rotate([1, 2, 3, 4, 5], -4)).to.deep.equal([5, 1, 2, 3, 4]);
      expect(rotate([1, 2, 3, 4, 5], 5)).to.deep.equal([1, 2, 3, 4, 5]);
      expect(rotate([1, 2, 3, 4, 5], -5)).to.deep.equal([1, 2, 3, 4, 5]);
      expect(rotate([1, 2, 3, 4, 5], 6)).to.deep.equal([5, 1, 2, 3, 4]);
      expect(rotate([1, 2, 3, 4, 5], -6)).to.deep.equal([2, 3, 4, 5, 1]);
      expect(rotate([true, true, false], 2)).to.deep.equal([true, false, true]);
      expect(rotate([1, 2, 3, 4, 5], 12478)).to.deep.equal([3, 4, 5, 1, 2]);
      expect(rotate(["a", "b", "c"], 2)).to.deep.equal(["b", "c", "a"]);
      expect(rotate([], 976999)).to.deep.equal([]);
    });
  });
});
