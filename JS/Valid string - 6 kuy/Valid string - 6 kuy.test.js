const { assert } = require('chai');
const validWord = require('./Valid string - 6 kuy');


describe('Solution test', () => {
  const act = ([dictionary, word, expected]) => {
    const input = `dictionary: [${dictionary}], word: ${word}`;
    const actual = validWord(dictionary, word);
    it(`${input}, expected: ${expected}`,
       () => assert.strictEqual(actual, expected));
  }
  describe('Fixed tests', () => {
    act([['code', 'wars'], 'codewars',true]);
    act([['wars', 'code'], 'codewars', true]);
    act([['code', 'wars'], 'codecodewars', true]);
    act([['code', 'wars'], 'codewar', false]);
    act([['code', 'wars'], 'codewarscode', true]);
    act([['code', 'star', 'wars'], 'starwars', true]);
    act([['Star', 'Code', 'Wars'], 'StarCodeWars', true]);
    act([['Star', 'Code', 'Wars'], 'WarsStarCode', true]);
    act([['Star', 'Code', 'Wars'], 'CodeStarsWar', false]);
    act([[], 'codewars', false]);
    act([['code', 'wars'], 'code', true]);
    act([['a', 'b', 'c', 'd', 'e', 'f'], 'abcdef', true]);
    act([['a', 'b', 'c', 'd', 'e', 'f'], 'abcdefg', false]);
    act([['ab', 'a', 'bc'], 'abc', true]);
    act([['ab', 'bc'], 'abc', false]);
  });
});