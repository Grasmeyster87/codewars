/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

//------------------------------

Дан массив целых чисел в виде строк и чисел. 
Верните сумму значений массива, как если бы все они были числами.

Верните ответ в виде числа.
*/

function sumMix(x){
return x.map(Number).reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0)
}

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));