const chai = require('chai');
const assert = chai.assert;
const reg = require('./Validate a key value string with RegExp - 5 kuy');

describe("Tests", () => {
  it("test", () => {
assert.DeepEquals(towerBuilder(1), ["*"]);
assert.DeepEquals(towerBuilder(2), [" * ","***"]);
assert.DeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
  });
});
