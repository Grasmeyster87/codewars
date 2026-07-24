const assert = require('chai').assert;
const initializeNames = require('./Initialize my name - 6 kuy');

describe('Example tests', function () {
    it('Only first name', function () {
        assert.strictEqual(initializeNames('Dimitri'), 'Dimitri');
    });

    it('No middle name', function () {
        assert.strictEqual(initializeNames('Jack Ryan'), 'Jack Ryan');
    });

    it('A single middle name', function () {
        assert.strictEqual(initializeNames('Lois Mary Lane'), 'Lois M. Lane');
    });

    it('Two middle names', function () {
        assert.strictEqual(
            initializeNames('Alice Betty Catherine Davis'),
            'Alice B. C. Davis',
        );
    });
});
