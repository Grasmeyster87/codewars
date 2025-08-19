/*
We'll create a function that takes in two parameters:

    a sequence (length and types of items are irrelevant)
    a function (value, index) that will be called on members of the sequence and their index. The function will return either true or false.

Your function will iterate through the members of the sequence in order until the provided function returns true; at which point your function will return that item's index.

If the function given returns false for all members of the sequence, your function should return -1.

//------------------------------------------------------------------
Мы создадим функцию, которая принимает два параметра:

последовательность (длина и типы элементов не имеют значения);

функцию (значение, индекс), которая будет вызываться для элементов последовательности и их индекса. Функция вернет либо true, либо false.

Ваша функция будет перебирать элементы последовательности по порядку, пока заданная функция не вернет true; в этот момент ваша функция вернет индекс этого элемента.

Если заданная функция возвращает false для всех элементов последовательности, ваша функция должна вернуть -1.

var trueIfEven = function(value, index) { return (value % 2 === 0) };
findInArray([1,3,5,6,7], trueIfEven) // should === 3


*/

function findInArray(array, iterator) {
  for (let i = 0; i < array.length; i++) {
    if (iterator(array[i], i)) {
      return i; 
    }
  }
  return -1; 
};
var trueIfEven = function(value, index) { return (value % 2 === 0) };
console.log (findInArray([1,3,5,6,7], trueIfEven)) // should === 3

/*------------------------------------- test
const assert = require('chai').assert;

describe("Tests", () => {
  it("test", () => {
    let trueIfEven = function(v, i) { return v % 2 === 0; }
    let neverTrue = function(v, i) { return false; }
    let trueIfValueEqualsIndex = function(v, i) { return v === i; }
    let trueIfLengthEqualsIndex = function(v, i) { return v.length === i; }

    assert.strictEqual(findInArray([], trueIfEven) , -1);
    assert.strictEqual(findInArray([1,3,5,6,7], trueIfEven) , 3);
    assert.strictEqual(findInArray([2,4,6,8], trueIfEven) , 0);
    assert.strictEqual(findInArray([2,4,6,8], neverTrue) , -1);
    assert.strictEqual(findInArray([13,5,3,1,4,5], trueIfValueEqualsIndex) , 4);
    assert.strictEqual(findInArray(["one","two","three","four","five","six"], trueIfLengthEqualsIndex) , 4);
    assert.strictEqual(findInArray(["bc","af","d","e"], trueIfLengthEqualsIndex) , -1);
  });
});
*/
