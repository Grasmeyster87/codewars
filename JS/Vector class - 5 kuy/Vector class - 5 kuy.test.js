const Vector = require('./Vector class - 5 kuy');
const { assert } = require('chai');

describe('Vector Error Handling Tests', () => {
    it('should throw an error when adding vectors of different lengths', () => {
        const a = new Vector([1, 2, 3]);
        const c = new Vector([5, 6, 7, 8]);
        
        // assert.throws очікує, що функція всередині викине помилку
        assert.throws(() => a.add(c), Error, "Lengths do not match");
    });

    it('should throw an error when calculating dot product of different lengths', () => {
        const a = new Vector([1, 2]);
        const c = new Vector([1, 2, 3]);

        assert.throws(() => a.dot(c), Error, "Lengths do not match");
    });
});