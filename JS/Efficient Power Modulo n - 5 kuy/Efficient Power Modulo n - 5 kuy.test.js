const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const modpow = require('./Efficient Power Modulo n - 5 kuy');



describe("Tests", function(){
  it("Fixed test", function(){
    assert.strictEqual(modpow(2, 3 ,5), 3)
    assert.strictEqual(modpow(4, 12, 3), 1)
    assert.strictEqual(modpow(11, 10, 300), 1)
    assert.strictEqual(modpow(11, 100000, 49), 32)
    assert.strictEqual(modpow(5, 100000000, 19), 5)
  })
})