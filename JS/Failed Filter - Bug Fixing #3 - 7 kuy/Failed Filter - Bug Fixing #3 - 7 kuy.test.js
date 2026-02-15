const assert = require('chai').assert;
const filterNumbers = require('./Failed Filter - Bug Fixing #3 - 7 kuy');


describe('Example Tests', () => {
    it('filterNumbers("test123")', () => {
        assert.equal(filterNumbers("test123"), 'test');
    });
    it('filterNumbers("a1b2c3")', () => {
        assert.equal(filterNumbers("a1b2c3"), 'abc');
    });
    it('filterNumbers("aa1bb2cc3dd")', () => {
        assert.equal(filterNumbers("aa1bb2cc3dd"), 'aabbccdd');
    });
});
