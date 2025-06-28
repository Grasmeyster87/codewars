/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.
----------------------------------------------------------------------------------------------------------------------
Есть ли там гласная?
Дан массив чисел, проверьте, являются ли какие-либо из чисел кодами символов для строчных гласных (a, e, i, o, u).

Если это так, измените значение массива на строку этой гласной.
*/

let inputArray = [100, 100, 116, 105, 117, 121];
let vowelsArray = ['a', 'e', 'i', 'o', 'u'];

function replaceVowelCodes(inputArray) {
    let outputArray = inputArray.map(num => {
        if (vowelsArray.includes(String.fromCharCode(num))) {
            return String.fromCharCode(num);
        } else {
            return num;
        }
    });
    return outputArray;
}

let outputArray = replaceVowelCodes(inputArray);
console.log(outputArray); // Виведе: [100, 100, 116, 'i', 'u', 121]
