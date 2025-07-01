const { assert } = require("chai");
const integerComplexity  = require('./Integer complexity - 5 kuy');

describe("Integer complexity", function () {
    it("should log execution time", function () {
    const start = process.hrtime.bigint(); // замер времени в наносекундах
    const result = integerComplexity(290);
    const end = process.hrtime.bigint();
    const durationMs = Number(end - start) / 1e6;
    console.log(`⏱️ Время выполнения: ${durationMs.toFixed(2)} мс`);
    assert.strictEqual(result, 17);
  });
    it("description example tests", function () {
        assert.strictEqual(integerComplexity(1), 1);
        assert.strictEqual(integerComplexity(2), 2);
        assert.strictEqual(integerComplexity(3), 3);
        assert.strictEqual(integerComplexity(6), 5);
        assert.strictEqual(integerComplexity(8), 6);
    });
    it("more example tests", function () {
        assert.strictEqual(integerComplexity(4), 4);
        assert.strictEqual(integerComplexity(7), 6);
        assert.strictEqual(integerComplexity(10), 7);
        assert.strictEqual(integerComplexity(14), 8);
        assert.strictEqual(integerComplexity(20), 9);
        assert.strictEqual(integerComplexity(46), 12);
        assert.strictEqual(integerComplexity(138), 15);
        assert.strictEqual(integerComplexity(290), 17);
    });
});