/*

Your task is to make a function that can take any non-negative integer as an argument and return 
it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
//-------------------------------------------------------------------------------------------------
Ваша задача — создать функцию, которая может принимать любое неотрицательное целое число 
в качестве аргумента и возвращать его с его цифрами в порядке убывания. 
По сути, переставьте цифры так, чтобы создать максимально возможное число.

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/
let num1 = 42145;

function descendingOrder(n) {
    return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
}

let res = descendingOrder(num1);

console.log(res);