const { assert, config } = require('chai');
config.truncateThreshold = 0;

describe('Example tests', () => {
  it('Single rare pepe', () => {
    const pepes = [
      'Donald Trump Pepe', 'Melania Trump Pepe',
      'Clown Pepe', 'Clown Pepe', 'Donald Trump Pepe'
    ];
    assert.deepEqual(findRarestPepe(pepes), 'Melania Trump Pepe');
  });
  it('Multiple rare pepes', () => {
    const pepes = [
      'Go Pepe', 'Deep Learning Pepe', 'Machine Learning Pepe',
      'Machine Learning Pepe', 'Machine Learning Pepe'
    ];
    assert.deepEqual(findRarestPepe(pepes), ['Deep Learning Pepe', 'Go Pepe']);
  });
  it('No rare pepes', () => {
    const pepes = [
      'Codewars Pepe', 'Codewars Pepe', 'Codewars Pepe',
      'Codewars Pepe', 'Codewars Pepe'
    ];
    assert.deepEqual(findRarestPepe(pepes), 'No rare pepes!');
  });
});