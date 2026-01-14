describe("Kata Tests",function(){
    const { assert, config } = require('chai');
    config.truncateThreshold = 0;
    const GroupByDifference = require('./Find All Array Values That Fall Within a Given Difference - 5 kuy');
    function doTest(array, diff, expected) {
        const message = `array = ${JSON.stringify(array)}\ndiff = ${diff}\n \n`;
        const actual = new GroupByDifference(array).find(diff);
        assert.deepEqual(actual, expected, message);
    }

    it("Basic Tests", function(){
        const numbers = [5, 32, 5, 1, 31, 70, 30, 8];
        doTest(numbers, 100, [1,5,5,8,30,31,32,70]);
        doTest(numbers, 3, [5,5,8,30,31,32]);
        doTest(numbers, 2, [5,5,30,31,32]);
        doTest(numbers, 0, [5,5]);
        doTest([], 10, []);
    });
});