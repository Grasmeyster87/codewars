const assert = require('assert');
const dontGiveMeFive = require('./Dont give me five - 7 kuy');

describe("KataTests", function(){
  it("exampleTests", function(){
    assert.strictEqual(dontGiveMeFive(1,9), 8);
    assert.strictEqual(dontGiveMeFive(4,17), 12);
  });
});