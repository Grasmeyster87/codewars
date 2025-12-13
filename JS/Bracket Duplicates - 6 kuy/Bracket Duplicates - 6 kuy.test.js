const { assert } = require('chai');
const stringParse = require('./Bracket Duplicates - 6 kuy');

describe('Tests', () => {
    it('test', () => {
        assert.equal(
            stringParse('aaaabbcdefffffffg'),
            'aa[aa]bbcdeff[fffff]g'
        );
        assert.equal(stringParse('boopdedoop'), 'boopdedoop');
        assert.equal(stringParse('helloookat'), 'helloo[o]kat');
    });
});
