const { assert } = require("chai")
const paintLetterboxes = require('./Letterbox Paint-Squad - 7 kuy');

describe("Example Tests", function() {

  it("ex", function(){
    assert.deepEqual(paintLetterboxes(125, 132), [1,9,6,3,0,1,1,1,1,1]);
  });

});