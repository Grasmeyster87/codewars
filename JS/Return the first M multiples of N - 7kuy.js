/*
Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n. 
Assume that m is a positive integer.

Ex.

(3, 5.0) --> [5.0, 10.0, 15.0]

//------------------------------

Реализуйте функцию, которая принимает два числа m и n и возвращает массив из первых m чисел, кратных вещественному числу n. 
Предположим, что m — положительное целое число.

Пример:

(3; 5.0) -> [5.0; 10.0; 15.0]
*/

function multiples(m, n) {
    return Array.from({ length: m }, (_, i) => n * (i + 1));
}

/*--- test
const { assert } = require('chai');

describe("Example tests", () => {
  it("should pass example test", () => {
    assert.deepEqual(multiples(3, 5), [5, 10, 15]);
  });
});
*/