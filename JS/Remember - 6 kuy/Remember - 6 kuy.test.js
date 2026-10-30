const {assert,config} = require("chai"); config.truncateThreshold = 0;
const remember = require("./Remember - 6 kuy");

describe("Remember", function() {
  it("Example tests",function(){
    assert.deepEqual( remember('apple'), ["p"] );
    assert.deepEqual( remember("limbojackassin the garden"), ["a","s","i"," ","e","n"] );
    assert.deepEqual( remember("11pinguin"), ["1", "i", "n"] );
    assert.deepEqual( remember("Claustrophobic"), ["o"] );
    assert.deepEqual( remember("apPle"), [] );
    assert.deepEqual( remember("11 pinguin"), ["1","i","n"] );
    assert.deepEqual( remember('pippi'), ["p","i"] );
    assert.deepEqual( remember('Pippi'), ["p","i"] );
    assert.deepEqual( remember('kamehameha'), ["a","m","e","h"] );
    assert.deepEqual( remember(''), [] );
  });
});