/*
Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.
Example

input: "abcd", [0, 3, 1, 2]
output: "acdb"

Explanation

    The character 'a' is placed at index 0.

    The character 'b' is placed at index 3.

    The character 'c' is placed at index 1.

    The character 'd' is placed at index 2.

Notes

    The string and the array will be of equal length.

    The string will contain valid characters (A-Z, a-z, or 0-9);
    the array will contain valid indices.

//----------------------------------------

Даны строка и массив индексов. Переставьте символы строки так, чтобы каждый символ оказался на позиции, заданной соответствующим индексом в массиве.

Пример

Входные данные: "abcd", [0, 3, 1, 2]
Выходные данные: "acdb"

Пояснение

Символ "a" находится в позиции 0.

Символ "b" находится в позиции 3.

Символ "c" находится в позиции 1.

Символ "d" находится в позиции 2.

Примечания

Строка и массив будут иметь одинаковую длину.

Строка будет содержать допустимые символы (A-Z, a-z или 0-9);
массив будет содержать допустимые индексы.
*/

let str = "abcd";
let arr = [0, 3, 1, 2];

function scramble(str, arr) {
    let result = [];
    str.split('').forEach((char, i) => {
        result[arr[i]] = char;
    });
    return result.join('');
};
/*
function scramble(str, arr) {
    return arr.reduce((res, idx, i) => (res[idx] = str[i], res), []).join('');
}
*/
console.log(scramble(str, arr));