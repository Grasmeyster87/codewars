const {assert} = require("chai");
const getCount = require('./Vowel Count - 7 kuy');

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});