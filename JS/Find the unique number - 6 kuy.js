/*
Find the unique number
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

//--------------------------------------

Найдите уникальное число
Дано множество чисел. Все числа равны, кроме одного. Попробуйте найти его!

findUniq([1, 1, 1, 2, 1, 1]) === 2
findUniq([0, 0, 0.55, 0, 0]) === 0.55

Гарантируется, что массив содержит не менее 3 чисел.

В тестах используются очень большие массивы, поэтому подумайте о производительности.
*/
function findUniq(arr) {
    // Сортируем массив
  arr.sort((a, b) => a - b);
  // Уникальный элемент будет либо первым, либо последним
  return arr[0] !== arr[1] ? arr[0] : arr[arr.length - 1];
}
let arr = [ 3, 10, 3, 3, 3 ];
console.log(findUniq(arr))

let arr1 = [ 1, 0, 0 ];
console.log(findUniq(arr1))

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example Tests", () => {
  it("Tests", () => {
    assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
    assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
    assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
    assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
    assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
    assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
  });
});
*/