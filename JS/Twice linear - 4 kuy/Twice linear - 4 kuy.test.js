const {assert} = require("chai");
const dblLinear = require('./Twice linear - 4 kuy');

function testing(actual, expected) {
	Test.assertEquals(actual, expected)
}

describe("dblLinear",function() {
it("Basic tests",function() { 
	testing(dblLinear(10), 22)
    testing(dblLinear(20), 57)
    testing(dblLinear(30), 91)
    testing(dblLinear(50), 175)
    testing(dblLinear(100), 447)
})})