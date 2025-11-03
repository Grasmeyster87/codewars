const chai = require('chai');
const { assert } = chai;

const _if  = require('./the_if_function- 8 kuy');
chai.config.truncateThreshold = 0;

describe("Tests", () => {

  const unexpectedTrue = () => assert.fail("'true' function unexpectedly called");
  const unexpectedFalse = () => assert.fail("'false' function unexpectedly called");


  it("test true function", () => {
    let testvar = 0;
    _if(true, () => testvar = 42, unexpectedFalse);
    assert.strictEqual(testvar, 42, "'true' function has not been called");
  });
  it("test false function", () => {
    let testvar = 0;
    _if(false, unexpectedTrue, () => testvar = 42);
    assert.strictEqual(testvar, 42, "'false' function has not been called");
  });
});