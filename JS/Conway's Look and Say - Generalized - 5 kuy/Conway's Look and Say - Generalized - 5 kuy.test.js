const { assert } = require('chai');
const lookSay = require("./Conway's Look and Say - Generalized - 5 kuy");

describe('Tests', () => {
    it('test', () => {
        assert.equal(lookSay(0), 10);
        assert.equal(lookSay(2014), 12101114);
        assert.equal(lookSay(1122), 2122);
        assert.equal(lookSay(22322), 221322);
    });
});
