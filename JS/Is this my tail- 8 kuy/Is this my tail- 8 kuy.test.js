const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const correctTail = require('./Is this my tail- 8 kuy');

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(correctTail("Fox", "x"), true);
        assert.strictEqual(correctTail("Rhino", "o"), true);
        assert.strictEqual(correctTail("Meerkat", "t"), true);
    });
});