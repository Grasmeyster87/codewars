const { assert } = require('chai');
const { upperTriangular, lowerTriangular } = require('./Triangular matrices - 6 kuy');

describe("Tests", () => {
  it("test", () => {
assert.equal(upperTriangular([[1,1,1],[0,1,1],[0,0,1]]),true);
assert.equal(upperTriangular([[1,1,1],[0,1,1],[0,2,1]]),false);
assert.equal(upperTriangular([[1,1,1],[2,1,1],[0,0,1]]),false);

assert.equal(lowerTriangular([[1,0,0],[1,1,0],[1,1,1]]),true);
assert.equal(lowerTriangular([[1,0,0],[1,1,1],[0,0,0]]),false);
assert.equal(lowerTriangular([[1,0,1],[1,1,0],[0,0,0]]),false);
  });
});