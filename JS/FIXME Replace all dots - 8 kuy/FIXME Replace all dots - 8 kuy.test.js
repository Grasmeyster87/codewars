const { assert } = require('chai');
const replaceDots = require('./FIXME Replace all dots - 8 kuy');

describe('Example Tests', function () {
    it('test dots', function () {
        assert.strictEqual(
            replaceDots('one.two.three'),
            'one-two-three',
            'Sorry, try again :-(',
        );
    });
});
