const { assert } = require('chai');
const windComponents = require('./Wind component calculation - 6 kuy');

describe('Tests', () => {
    it('test', () => {
        assert.equal(
            windComponents('18L', 170, 15),
            'Headwind 15 knots. Crosswind 3 knots from your left.'
        );

        assert.equal(
            windComponents('22', 160, 20),
            'Headwind 10 knots. Crosswind 17 knots from your left.'
        );
    });
});
