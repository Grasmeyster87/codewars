const assert = require('chai').assert;
const polygonArea = require('./Area of a Polygon (Easy) - 8 kuy');

describe('polygonArea', function () {
    it('polygonArea(2,4,4,2) === 12', function () {
        assert.strictEqual(polygonArea(2, 4, 4, 2), 12);
    });

    it('polygonArea(0,0,0,0) === 0', function () {
        assert.strictEqual(polygonArea(0, 0, 0, 0), 0);
    });

    it('polygonArea(2,5,10,2.5) === 30', function () {
        assert.strictEqual(polygonArea(2, 5, 10, 2.5), 30);
    });
});
