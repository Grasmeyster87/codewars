const assert = require('chai').assert;
const minSteps = require('./Simple_Fun_344_Children_And_Apples - 6 kuy');

describe("Basic Tests", function () {
    it("It should works for basic tests.", function () {

        assert.equal(minSteps([7, 15, 9, 5]), 3);

        assert.equal(minSteps([7, 7, 7, 7]), 0);

        assert.equal(minSteps([7, 6, 7, 8]), -1);

        assert.equal(minSteps([7, 7, 7, 5]), -1);

        assert.equal(minSteps([7, 7, 7, 4]), -1);

        assert.equal(minSteps([7, 7, 7, 3]), -1);

        assert.equal(minSteps([1, 1, 4, 4, 8, 6]), -1);

    });
});