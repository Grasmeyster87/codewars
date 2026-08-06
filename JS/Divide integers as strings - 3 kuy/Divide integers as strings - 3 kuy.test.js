const chai = require('chai');
const assert = chai.assert;
const divideStrings = require('./Divide integers as strings - 3 kuy');

describe("Tests", function(){
  function test(a,b) {
    it(`divideStrings(${a}, ${b})`, function() {
      assert.deepEqual(divideStrings(a.toString(),b.toString()),[Math.floor(a/b).toString(),(a%b).toString()]);
    });
  }
  test(0,5);
  test(4,5);
  test(10,2);
  test(20,3);
  test(60,5);
  test(219,11);
  test(729,9)
  test(1000,10);
  test(600001,100);
});