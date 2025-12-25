const { expect } = require('chai');
const stringTransformation = require('./String transformations - 6 kuy');

describe('transformString – example tests', () => {
    it('Uppercase + Reverse', () => {
        expect(stringTransformation('abcd', ['U', 'R'])).to.equal('DCBA');
    });

    it('Duplicate + Lowercase', () => {
        expect(stringTransformation('abc', ['D', 'L'])).to.equal('aabbcc');
    });

    it('Lowercase + Reverse', () => {
        expect(stringTransformation('AbCd', ['L', 'R'])).to.equal('dcba');
    });
});
