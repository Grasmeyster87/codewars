const { assert } = require('chai');
const citySurfaceArea = require('./City Surface Area - 6 kuy');

describe('Basic tests', function () {
    it('A village', function () {
        assert.strictEqual(
            citySurfaceArea([
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ]),
            9
        );
    });

    it('A town', function () {
        assert.strictEqual(
            citySurfaceArea([
                [5, 5, 0, 0, 0],
                [5, 5, 0, 2, 2],
                [0, 0, 0, 0, 2],
                [0, 0, 0, 2, 2],
                [0, 3, 3, 0, 0],
            ]),
            107
        );
    });

    it('A city', function () {
        assert.strictEqual(
            citySurfaceArea([
                [9, 9, 0, 0, 0, 0, 0],
                [9, 9, 0, 7, 7, 7, 7],
                [9, 9, 0, 7, 7, 7, 7],
                [9, 9, 0, 7, 7, 7, 7],
                [0, 0, 0, 0, 0, 0, 0],
                [6, 6, 6, 6, 3, 3, 0],
                [6, 6, 6, 6, 3, 3, 0],
            ]),
            339
        );
    });

    it('Strange building', function () {
        assert.strictEqual(
            citySurfaceArea([
                [4, 2, 0],
                [2, 1, 2],
                [0, 2, 4],
            ]),
            53
        );
    });
});
