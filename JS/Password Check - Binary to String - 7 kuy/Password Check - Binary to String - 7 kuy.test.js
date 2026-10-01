const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const decodePass = require('./Password Check - Binary to String - 7 kuy');

describe('Fixed Tests', () => {
    it('Tests', () => {
        assert.strictEqual(
            decodePass(
                ['password123', 'admin', 'admin1'],
                '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011',
            ),
            'password123',
        );
        assert.strictEqual(
            decodePass(
                ['password321', 'admin', 'admin1'],
                '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011',
            ),
            false,
        );
        assert.strictEqual(
            decodePass(
                ['password456', 'pass1', 'test12'],
                '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011',
            ),
            false,
        );
    });
});
