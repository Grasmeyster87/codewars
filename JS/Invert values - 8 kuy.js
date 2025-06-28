/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []

You can assume that all values are integers. Do not mutate the input array.

//------------------------------------------------------------------------

Дано множество чисел, верните аддитивное обратное для каждого. Каждое положительное становится отрицательным, а отрицательное становится положительным.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []

Можно предположить, что все значения являются целыми числами. Не изменяйте входной массив.

*/
let arr1 = [1, -2, 3, -4, 5];

function invert(array) {
    return array.map(el => -el);
};

let res = invert(arr1);

console.log(res);