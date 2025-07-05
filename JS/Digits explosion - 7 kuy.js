/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
Examples

"312" should return "333122"

"102269" should return "12222666666999999999"

//---------------------------------------------------

Дано рядок, що складається з цифр [0-9]. Поверніть рядок, де кожна цифра повторюється кількість разів, що дорівнює її значенню.
Приклади

"312" має повернути "333122"

"102269" має повернути "12222666666999999999"
*/
let s = "312";

function explode(s) {
    if (!s) return '';
    return s.split('')
            .map(el => el.repeat(Number(el)))
            .join('');
}
console.log(explode(s)); // "333122"