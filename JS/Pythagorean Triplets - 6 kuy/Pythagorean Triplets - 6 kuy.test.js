const { expect } = require('chai');
const pythagoreanTriplet = require('./Pythagorean Triplets - 6 kuy');

describe('Tests', function () {
    Test.assertSimilar(pythagoreanTriplet(60), [3, 4, 5]);
    Test.assertSimilar(pythagoreanTriplet(780), [5, 12, 13]);
});
