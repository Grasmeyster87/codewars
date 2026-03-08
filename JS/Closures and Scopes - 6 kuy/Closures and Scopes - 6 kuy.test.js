const chai = require('chai');
const assert = chai.assert;
const createFunctions = require('./Closures and Scopes - 6 kuy');

function test_it(callbacks, expectedLength, description) {
    describe(`createFunctions(${expectedLength})`, () => {
        it('should return an array', function () {
            assert.isArray(
                callbacks,
                `createFunctions(${expectedLength}) should return an array`,
            );
        });
        it(`should return an array of length ${expectedLength}`, () => {
            assert.strictEqual(
                callbacks.length,
                expectedLength,
                `createFunctions(${expectedLength}) should return an array of length ${expectedLength}`,
            );
        });
        it('should return an array where all elements are functions', () => {
            for (let index = 0; index < expectedLength; index++) {
                assert.isFunction(
                    callbacks[index],
                    `Element at index ${index} should be a function`,
                );
            }
        });
        it('all functions should return their respective indices', () => {
            for (let index = 0; index < expectedLength; index++) {
                assert.strictEqual(
                    callbacks[index](),
                    index,
                    `Function at index ${index} should return ${index}`,
                );
            }
        });
    });
}

describe('Sample tests', () => {
    const callbacks = createFunctions(5);
    test_it(callbacks, 5);
});
