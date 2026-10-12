const chai = require('chai');
const { assert } = chai;

const deadAntCount = require('./Dead Ants - 6 kuy');

describe('ExampleTests', function () {
    it('examples', function () {
        assert.equal(deadAntCount('ant ant ant ant'), 0, 'Nope');
        assert.equal(deadAntCount(null), 0, 'Nope');
        assert.equal(deadAntCount('ant anantt aantnt'), 2, 'Nope');
        assert.equal(deadAntCount('ant ant .... a nt'), 1, 'Nope');
    });
});