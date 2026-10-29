const {assert} = require("chai");
const findAdditiveNumbers = require("./Additive Numbers - 5 kuy");

describe("Additive numbers", function() {
  it('Initial test',() => {
    assert.deepEqual(findAdditiveNumbers('112358'),['1','1','2','3','5','8']);
    assert.deepEqual(findAdditiveNumbers('199100199'),['1','99','100','199']);
    assert.deepEqual(findAdditiveNumbers('1023'),[]);
    assert.deepEqual(findAdditiveNumbers('112356'),[]);
    assert.deepEqual(findAdditiveNumbers('101'),['1','0','1']);
    assert.deepEqual(findAdditiveNumbers('198001519815'),["19800", "15", "19815"]);
    assert.deepEqual(findAdditiveNumbers('10020120'),["100", "20", "120"]);
    assert.deepEqual(findAdditiveNumbers('7916972717643273704501372383'),["7916", "9727", "17643", "27370", "45013", "72383"]);
  });
});