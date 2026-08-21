const { assert, config } = require('chai');
const {
    encode,
    decode,
} = require('./Data compression using run-length encoding');

describe('Fixed tests', function () {
    it('Test encode', function () {
        assert.strictEqual(encode('A'), '1A');
        assert.strictEqual(encode('AAA'), '3A');
        assert.strictEqual(encode('AB'), '1A1B');
        assert.strictEqual(encode('AAABBBCCCA'), '3A3B3C1A');
    });
    it('Test decode', function () {
        assert.strictEqual(decode('1A'), 'A');
        assert.strictEqual(decode('3A'), 'AAA');
        assert.strictEqual(decode('1A1B'), 'AB');
        assert.strictEqual(decode('3A3B3C1A'), 'AAABBBCCCA');
    });
    it('Round trip', function () {
        assert.strictEqual(decode(encode('AAAAAAAAAAB')), 'AAAAAAAAAAB');
        assert.strictEqual(
            decode(encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ')),
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        );
        assert.strictEqual(encode(decode('10A1B')), '10A1B');
        assert.strictEqual(
            encode(
                decode('1A1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T1U1V1W1X1Y1Z'),
            ),
            '1A1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T1U1V1W1X1Y1Z',
        );
    });
});
