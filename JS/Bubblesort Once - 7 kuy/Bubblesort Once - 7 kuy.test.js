const { assert } = require('chai');
const bubblesortOnce = require('./Bubblesort Once - 7 kuy'); 

describe("bubblesortOnce", function () {
  it("should work for an example assertion", function () {
    assert.deepEqual(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]), [7, 5, 3, 1, 2, 4, 6, 8, 9]);
  });
});