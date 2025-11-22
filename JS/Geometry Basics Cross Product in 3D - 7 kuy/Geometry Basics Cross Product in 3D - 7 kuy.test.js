const chai = require('chai');
const { assert } = chai;

const crossProduct = require('./Geometry Basics Cross Product in 3D - 7 kuy');
const Vector = crossProduct.Vector;

chai.config.truncateThreshold = 0;

describe("crossProduct", function () {
    it("should return new vector - the cross product of v1 and v2", function () {
        assert.deepEqual(crossProduct(new Vector(2, 0, -1), new Vector(0, -2, 1)), new Vector(-2, -2, -4));
        assert.deepEqual(crossProduct(new Vector(0, -2, 1), new Vector(2, 0, -1)), new Vector(2, 2, 4));
        assert.deepEqual(crossProduct(new Vector(1, 1, 1), new Vector(2, -2, 2)), new Vector(4, 0, -4));
        assert.deepEqual(crossProduct(new Vector(7, 2.5, -3), new Vector(0.4, -0.9, 0.2)), new Vector(-2.2, -2.6000000000000005, -7.3));
    });
});