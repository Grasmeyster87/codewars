const { assert } = require('chai');
const pseudoBinary = require('./Pseudo-binary Result - 6  kuy');

describe('Pseudo-binary', function () {
    it('description example tests', function () {
        test(2n);
        test(3n);
        test(10n);
        test(9n);
    });
});

function test(n) {
    const actual = pseudoBinary(n);
    assert(
        /^1[01]*$/.test((n * actual).toString()),
        `${n} * ${actual} = ${n * actual} is not a pseudo-binary number.`
    );
}
