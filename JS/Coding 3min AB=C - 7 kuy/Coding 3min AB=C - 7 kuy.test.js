const {assert} = require("chai");
const {isEqual} = require('lodash');
function dotest(numbers, c, expected){
  it("numbers = [" + numbers.join(", ") + "]\nc = " + c, () => {
    let actual = findAB(numbers,c);
    assert(isEqual(actual,expected), `expected: ${JSON.stringify(expected)}\n     got: ${JSON.stringify(actual)}`);
  });
}

describe("-------- Basic Tests --------", () => {
  dotest([1,2,3], 3, [1,3]);
  dotest([1,2,3], 6, [2,3]);
  dotest([1,2,3], 7, null);
  dotest([1,2,3,6], 6, [1,6]);
  dotest([1,2,3,4,5,6], 15, [3,5]);
  dotest([0,0,2], 4, null);
  dotest([0,0,2,2], 4, [2,2]);
  dotest([-3,-2,-2,-1,0,1,2,3,4], 4, [-2,-2]);
  dotest([-3,-2,-2,-1,0,1,2,3,4], 0, [-3,0]);
  dotest([-3,-2,-1,0,1,2,3,4], 4, [1,4]);
  dotest([0,1,2,3], 0, [0,1]);
  dotest([0,0,2,3], 0, [0,0]);
});