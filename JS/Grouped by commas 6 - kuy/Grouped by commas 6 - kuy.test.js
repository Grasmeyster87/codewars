const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("Fixed Tests", () => {
  it("Basic Test Cases", () => {
    assert.equal(groupByCommas(1), "1");
    assert.equal(groupByCommas(12), "12");
    assert.equal(groupByCommas(123), "123");
    assert.equal(groupByCommas(1234), "1,234");
    assert.equal(groupByCommas(12345), "12,345");
    assert.equal(groupByCommas(123456), "123,456");
    assert.equal(groupByCommas(1234567), "1,234,567");
    assert.equal(groupByCommas(12345678), "12,345,678");
    assert.equal(groupByCommas(123456789), "123,456,789");
    assert.equal(groupByCommas(1234567890), "1,234,567,890");
    assert.equal(groupByCommas(2147483647), "2,147,483,647");
    assert.equal(groupByCommas(0), "0");
  });
});