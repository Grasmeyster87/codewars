const { assert, config } = require('chai');
config.truncateThreshold = 0;
const {decodeBits, decodeMorse} = require('./Decode the Morse code, advanced - 4 kuy');


describe('Example tests', function() {
  it('Example from description', function() {
    assert.strictEqual(decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')), 'HEY JUDE');
  });
});