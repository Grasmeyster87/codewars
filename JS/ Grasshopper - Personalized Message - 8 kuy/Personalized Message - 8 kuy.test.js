const { assert } = require('chai');
const greet = require('./Personalized Message - 8 kuy');

describe('Tests', () => {
    it('test', () => {
        assert.equal(greet('Daniel', 'Daniel'), 'Hello boss');
        assert.equal(greet('Greg', 'Daniel'), 'Hello guest');
    });
});
