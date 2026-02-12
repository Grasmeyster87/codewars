const chai = require('chai');
const assert = chai.assert;
const breakCaesar = require('./Break the Caesar! - 5 kuy');

describe('Example cases', function () {
    it('basic tests', function () {
        assert.strictEqual(breakCaesar('DAM?'), 7);
        assert.strictEqual(breakCaesar('Mjqqt, btwqi!'), 5);
        assert.strictEqual(
            breakCaesar('Gur dhvpx oebja sbk whzcf bire gur ynml qbt.'),
            13,
        );
    });
});
