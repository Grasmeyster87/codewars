const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const items = require('./Push a hash-an object into array - 8 kuy');


describe("Push an object into array", function(){
  it ("should have a value", function(){
    assert.isNotEmpty(items, 'The array is still empty')
  });
  it ("should have only one value", function(){
    assert.lengthOf(items, 1, 'The array contains too many values')
  });
  it ("should have the correct value", function(){
    assert.deepEqual(items, [{a: "b", c: "d"}], 'The array does not contain the correct value"')
  });
});