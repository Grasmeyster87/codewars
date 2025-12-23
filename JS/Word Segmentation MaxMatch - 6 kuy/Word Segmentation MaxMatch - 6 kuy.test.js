const { assert } = require('chai');
const maxMatch = require('./Word Segmentation MaxMatch - 6 kuy');

describe('Tests', () => {
    it('test', () => {
        assert.deepEqual(maxMatch('goodluck'), ['good', 'luck']);
        assert.deepEqual(maxMatch('ewingsa'), ['e', 'w', 'in', 'g', 's', 'a']); //'ewingsa' is not a valid word
    });
});
