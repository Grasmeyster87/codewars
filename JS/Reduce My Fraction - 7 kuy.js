/*
Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) 
of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]

All numerators and denominators will be positive integers.

Note: This is an introductory Kata for a series... coming soon!

//--------------------------------------------------------------

Напишите функцию, которая приводит дроби к простейшему виду! Дроби будут представлены в виде массива/кортежа (в зависимости от языка)
 строго положительных целых чисел, а сокращённая дробь должна быть возвращена в виде массива/кортежа:

входные данные: [числитель, знаменатель]
выходные данные: [сокращённый числитель, сокращённый знаменатель]
пример: [45, 120] --> [3, 8]

Все числители и знаменатели будут положительными целыми числами.

Примечание: Это вводная ката для ряда... скоро!
*/


function reduce(fraction) {
  const [numerator, denominator] = fraction;

  // Допоміжна функція для знаходження НСД (найбільшого спільного дільника)
  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  const divisor = gcd(numerator, denominator);
  return [numerator / divisor, denominator / divisor];
}

// Приклад використання
let arr = [45, 120];
let res = reduce(arr);
console.log(res); // Виведе: [3, 8]


/* test
const { assert } = require('chai');

const test = (input, expected, message) => {
  assert.deepEqual(reduce(input), expected, message);
}

describe('reduce()', () => {
  it('basic tests', () => {
    const tests = [
      [[60, 20], [3, 1]],
      [[80, 120], [2, 3]],
      [[4, 2], [2, 1]],
      [[45, 120], [3, 8]],
      [[1000, 1], [1000, 1]],
      [[1, 1], [1, 1]],
    ];

    for (const [input, expected] of tests) {
      test(input, expected);
    }
  });
});
*/