describe("tests", function () {
    const chai = require('chai'), { assert } = chai;
    chai.config.truncateThreshold = 0;
    const wrap = require('./Semi-Optional - 8 kuy');


    it("sample tests", function () {
        assert.deepEqual(wrap("MyTest"), {value: "MyTest"});
        const obj = {"test":"testy"};
        assert.deepEqual(wrap(obj), {value: {"test":"testy"}});
        assert.strictEqual(wrap(obj).value, obj, "wrap as-is, do not make a copy");
    });
});