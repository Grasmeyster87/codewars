describe('Testing latestClock', () => {
    const { assert } = require('chai');
    const latestClock = require('./The latest clock - 6 kuy');

    function doTest(a, b, c, d, expected) {
        const actual = latestClock(a, b, c, d);
        assert.strictEqual(
            actual,
            expected,
            `latestClock(${a}, ${b}, ${c}, ${d})`,
        );
    }

    it('Basic tests', () => {
        doTest(1, 9, 8, 3, '19:38');
        doTest(9, 1, 2, 5, '21:59');
        doTest(1, 2, 8, 9, '19:28');
        doTest(0, 0, 0, 0, '00:00');
        doTest(2, 4, 0, 0, '20:40');
    });
});
