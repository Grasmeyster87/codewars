const chai = require("chai");
const assert = chai.assert;
const crack = require('./Crack the PIN - 6 kuy');
chai.config.truncateThreshold = 0;

describe("Should pass all of these", function() {
  it("simple example", function() {
    assert.equal(crack("827ccb0eea8a706c4c34a16891f84e7b"), "12345");
  });
  it("harder example", function() {
    assert.equal(crack("86aa400b65433b608a9db30070ec60cd"), "00078");
  });
 
});
