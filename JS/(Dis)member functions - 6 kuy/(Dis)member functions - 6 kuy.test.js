const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const dismember = require('./(Dis)member functions - 6 kuy');

describe('Tests', () => {
    it('test', () => {
        assert.deepEqual(
            dismember(function () {
                return 0;
            }),
            [],
            'Returns an empty array for a function with no explicity defined arguments',
        );
        assert.deepEqual(
            dismember(function (arg1) {
                return arg1;
            }),
            ['arg1'],
            'Returns name of the only arguments for a function that takes in a single argument',
        );
        assert.deepEqual(
            dismember(function (z, b) {
                return z + b;
            }),
            ['z', 'b'],
            'Returns names of two arguments for a function that takes in two arguments',
        );
        assert.deepEqual(
            dismember(function (a, c) {
                return a + c;
            }),
            ['a', 'c'],
            'Returns names of two arguments for a function that takes in two arguments, written in another way',
        );
    });
});
