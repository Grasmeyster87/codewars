/*
Find the unique string
There is an array of strings. All strings contains similar letters except one. Try to find it!
findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.
It’s guaranteed that array contains more than 2 strings.
This is the second kata in series:

    Find the unique number
    Find the unique string (this kata)
    Find The Unique
    //------------------------

Найдите уникальную строку
Дан массив строк. Все строки содержат одинаковые буквы, кроме одной. Попробуйте найти её!
findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Строки могут содержать пробелы. Пробелы не имеют значения, учитываются только символы, не являющиеся пробелами. Например, строка, содержащая только пробелы, считается пустой.
Гарантируется, что массив содержит более двух строк.
Это второе ката в серии:

Найдите уникальный номер
Найдите уникальную строку (этого ката)
Найдите уникальное
*/
function findUniq(arr) {
  // Преобразуем каждую строку в отсортированное множество символов без пробелов и в нижнем регистре
  const normalized = arr.map(str =>
    [...new Set(str.replace(/\s+/g, '').toLowerCase())].sort().join('')
  );

  // Найдем наиболее часто встречающееся значение
  const freq = {};
  for (let norm of normalized) {
    freq[norm] = (freq[norm] || 0) + 1;
  }

  // Найдем уникальное значение (встречается один раз)
  const uniqueNorm = Object.keys(freq).find(key => freq[key] === 1);

  // Вернем оригинальную строку, соответствующую уникальному нормализованному виду
  return arr[normalized.indexOf(uniqueNorm)];
}

let arr1 = [ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ];
console.log('BbBb = ', findUniq(arr1))

/* test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('findUniq', () => {
  it('should handle sample cases', () => {
    assert.strictEqual(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]), 'BbBb');
    assert.strictEqual(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]), 'foo');
    assert.strictEqual(findUniq([ 'silvia', 'vasili', 'victor' ]), 'victor');
    assert.strictEqual(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]), 'Harry Potter');
    assert.strictEqual(findUniq([ '    ', 'a', ' ' ]), 'a');
  });
});
*/
