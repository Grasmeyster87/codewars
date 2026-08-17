const { assert } = require('chai');
const rectangleRotation = require('./Simple Fun #27 Rectangle Rotation - 4 kuy');

describe('Basic Tests', function () {
    it('It should works for basic tests.', function () {
        assert.strictEqual(rectangleRotation(6, 4), 23);

        assert.strictEqual(rectangleRotation(30, 2), 65);

        assert.strictEqual(rectangleRotation(8, 6), 49);

        assert.strictEqual(rectangleRotation(16, 20), 333);
    });
});
