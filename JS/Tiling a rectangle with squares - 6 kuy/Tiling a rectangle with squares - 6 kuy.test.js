const {assert} = require("chai");
const numTiles = require('./Tiling a rectangle with squares - 6 kuy');


describe("Tiling a rectangle", function() {
  it("example tests", function() {
    assert.equal( numTiles( 1n, 1n ), 1n, `numTiles( 1, 1 )` );
    assert.equal( numTiles( 2n, 1n ), 2n, `numTiles( 2, 1 )` );
    assert.equal( numTiles( 2n, 2n ), 1n, `numTiles( 2, 2 )` );
    assert.equal( numTiles( 3n, 2n ), 3n, `numTiles( 3, 2 )` );
    assert.equal( numTiles( 8n, 4n ), 2n, `numTiles( 8, 4 )` );
    assert.equal( numTiles( 4n, 8n ), 2n, `numTiles( 4, 8 )` );
    assert.equal( numTiles( 13n, 11n ), 32n, `numTiles( 13, 11 )` );
    assert.equal( numTiles( 15n, 5n ), 24n, `numTiles( 15, 5 )` );
    assert.equal( numTiles( 16n, 16n ), 1n, `numTiles( 16, 16 )` );
  });
});