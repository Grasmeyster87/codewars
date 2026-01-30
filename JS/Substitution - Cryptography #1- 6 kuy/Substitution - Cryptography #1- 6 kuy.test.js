const { assert } = require('chai');
const Substitution = require('./Substitution - Cryptography #1- 6 kuy');

describe('Fixed Tests', function () {
    const sub = Substitution();

    it(`Encryption Tests`, function () {
        assert.equal(sub.Encrypt('a'), '155', 'testing on - a');
        assert.equal(sub.Encrypt('abc'), '155156157', 'testing on - abc');
        assert.equal(
            sub.Encrypt('test'),
            '174159173174',
            'testing on - test',
        );
        assert.equal(
            sub.Encrypt('encrypt'),
            '159168157172179170174',
            'testing on - encrypt',
        );
        assert.equal(
            sub.Encrypt('CodeWars'),
            '125169158159145155172173',
            'testing on - codewars',
        );
    });

    it(`Decryption Tests`, function () {
        assert.equal(sub.Decrypt('155'), 'a', 'testing on - a');
        assert.equal(sub.Decrypt('155156157'), 'abc', 'testing on - abc');
        assert.equal(
            sub.Decrypt('174159173174'),
            'test',
            'testing on - test',
        );
        assert.equal(
            sub.Decrypt('159168157172179170174'),
            'encrypt',
            'testing on - encrypt',
        );
        assert.equal(
            sub.Decrypt('125169158159145155172173'),
            'CodeWars',
            'testing on - codewars',
        );
    });
});
