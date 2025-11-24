const chai = require('chai');
const { assert } = chai;

const sumUpNumbers = require('./Decimals or groups of thousands - 6 kuy');

describe("Test cases", function () {
    it("should work for the following cases", function () {
        assert.equal(sumUpNumbers(["1,234.34", "1.324,2", "14"]), "2,572.54");
    });
});