/*
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.

Напишите функцию, которая вычисляет среднее значение чисел в заданном массиве.

Примечание: пустые массивы должны возвращать 0.
*/
let arr1 = [1, 2, 3, 4, 5]; // 15/5 = 3;

function findAverage(array) {
    // your code here
    return array.length === 0 ? 0 : array.reduce((sum, current) => sum + current, 0) / array.length;
}

console.log(findAverage(arr1));