/*
ASC Week 1 Challenge 5 (Medium #2)

Create a function that takes a 2D array as an input, and outputs another array that contains the average values for the numbers in the nested arrays at the corresponding indexes.

Note: the function should also work with negative numbers and floats.
Examples

[ [1, 2, 3, 4], [5, 6, 7, 8] ]  ==>  [3, 4, 5, 6]

1st array: [1, 2, 3, 4]
2nd array: [5, 6, 7, 8]
            |  |  |  |
            v  v  v  v
average:   [3, 4, 5, 6]

And another one:

[ [2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34] ]  ==>  [22.5, 11, 38.75, 38.25, 19.5]

1st array: [  2,   3,    9,   10,    7]
2nd array: [ 12,   6,   89,   45,    3]
3rd array: [  9,  12,   56,   10,   34]
4th array: [ 67,  23,    1,   88,   34]
              |    |     |     |     |
              v    v     v     v     v
average:   [22.5, 11, 38.75, 38.25, 19.5]

//---------------------------------------

ASC, неделя 1, задание 5 (средний уровень, №2)

Создайте функцию, которая принимает двумерный массив на входе и возвращает другой массив, содержащий средние значения чисел во вложенных массивах по соответствующим индексам.

Примечание: функция также должна работать с отрицательными числами и числами с плавающей точкой.
*/
const arr1 = [[1, 2, 3, 4], [5, 6, 7, 8]];
/* function avgArray(arr) {
    // Если входной массив пуст или не содержит подмассив, вернуть пустой массив
    if (!arr.length || !arr[0].length) return [];

    // Вычисляем количество подмассивов и длинну каждого из них
    const numArrays = arr.length;

    // Создаем новый массив средних значений для каждого индекса, используя map
    return arr[0].map((_, index) => {
        // Используем reduce для вычисления суммы всех елементов на данном индексе во всех подмассивах
        const sum = arr.reduce((acc, curentArray) => acc + curentArray[index], 0);

        // Возвращаем среднее значение, делим сумму на количество подмассивов
        return sum / numArrays;
    });
} */

const avgArray = arr => (arr.length ? arr[0].map((_, i) => arr.reduce((s, a) => s + a[i], 0) / arr.length) : []);


const res = avgArray(arr1);
console.log(res)

/* test
const { assert, config } = require('chai');
config.truncateThreshold = 0;

describe('Your "avgArray" function', function () {
  it('should work for the examples provided in the Description', function () {
    assert.deepEqual(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]), [3, 4, 5, 6]);
    assert.deepEqual(avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]), [22.5, 11, 38.75, 38.25, 19.5]);
    assert.deepEqual(avgArray([[1.2, 8.521, 0.4, 3.14, 1.9], [2, 4.5, 3.75, 0.987, 1.0]]),  [1.6, 6.5105, 2.075, 2.0635, 1.45]);
  });
});
*/