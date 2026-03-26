const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const weightN = require('./Weighing on scales with pans (easy) - 5 kuy');

describe('weightN', function () {
    it('given [1,2,7], 2', function () {
        assert.deepEqual(weightN([1, 2, 7], 2), [[2], []]);
    });

    it('given [1,2,7], 5', function () {
        assert.deepEqual(weightN([1, 2, 7], 5), [[7], [2]]);
    });

    it('given [1,2,7], 50', function () {
        assert.deepEqual(weightN([1, 2, 7], 50), []);
    });
});
