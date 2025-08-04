/*
Instructions

Write a function that accepts an integer n in parameter and returns a string following the pattern below.

    if n <= 0, return an empty string: ""
    for your convenience, the tests will trim invisible spaces, i.e. trailing spaces before a newline, so that e.g. "x\nx x\nx" and "x\nx x    \nx" are considered equal, as they display identically when printed.

Patterns
//-----------------------------------------
Инструкции

Напишите функцию, которая принимает целое число n в качестве параметра и возвращает строку, следуя приведенному ниже шаблону.

Если n <= 0, вернуть пустую строку: ""

Для вашего удобства тесты будут обрезать невидимые пробелы, то есть конечные пробелы перед новой строкой, 
так что, например, "x\nx x\nx" и "x\nx x \nx" будут считаться равными, поскольку при печати они отображаются одинаково.
//-----------------------------------------

    n = 1

x

    n = 2

 x
x x
 x

    n = 3

  x
   x
x o x
 x
  x

    n = 4

   x
    x
   o x
x o o x
 x o
  x
   x

    n = 5

    x
     x
    o x
     o x
x o x o x
 x o
  x o
   x
    x

    n = 6

     x
      x
     o x
      o x
     x o x
x o x x o x
 x o x
  x o 
   x o
    x 
     x

and so on ...


*/

function patternGenerator(n) {
    // Якщо n не є додатним цілим числом, повертаємо порожній рядок.
    if (n <= 0) {
        return "";
    }

    const lines = [];
    // Зберігаємо масиви символів для верхньої половини, щоб використовувати їх для нижньої.
    const topHalfChars = [];

    // --- Верхня половина та центральний рядок ---
    // Цикл проходить від i=0 до n-1, генеруючи верхню половину ромба
    // та центральний рядок.
    for (let i = 0; i < n; i++) {
        // Цей масив буде містити символи для поточного рядка.
        let rowChars = [];

        // Логіка для верхньої половини ромба (i < n-1).
        if (i < n - 1) {
            // Кількість символів на цих рядках слідує шаблону: 1, 1, 2, 2, 3, 3, ...
            // Ми можемо визначити це, знайшовши k = floor(i/2).
            const k = Math.floor(i / 2);

            // Визначаємо початковий символ повторюваного шаблону.
            // Це 'x' для парного k і 'o' для непарного k.
            let startChar = (k % 2 === 0) ? 'x' : 'o';

            // Кількість символів дорівнює k+1.
            for (let j = 0; j <= k; j++) {
                // Символи чергуються.
                if (j % 2 === 0) {
                    rowChars.push(startChar);
                } else {
                    rowChars.push(startChar === 'o' ? 'x' : 'o');
                }
            }

        } else { // Логіка для центрального рядка (i === n-1).
            if (n === 1) {
                rowChars.push('x');
            } else {
                // Центральний рядок завжди починається і закінчується на 'x'.
                rowChars.push('x');

                // Символи між ними слідують паліндромічному шаблону 'o' і 'x'.
                const middleLength = n - 2;
                let middleChars = [];

                for (let j = 0; j < middleLength; j++) {
                    // Генеруємо першу половину середнього рядка.
                    if (j <= (middleLength - 1) / 2) {
                        middleChars.push(j % 2 === 0 ? 'o' : 'x');
                    } else {
                        // Використовуємо симетрію, щоб завершити другу половину.
                        middleChars.push(middleChars[middleLength - 1 - j]);
                    }
                }

                rowChars.push(...middleChars);
                rowChars.push('x');
            }
        }

        // Зберігаємо масив символів для поточного рядка.
        topHalfChars.push(rowChars);

        // Визначаємо кількість початкових пробілів для поточного рядка,
        // враховуючи, що центральний рядок не має відступів,
        // а інші рядки чергуються між n-1 і n пробілами.
        let spaces = "";
        if (i === n - 1) {
            spaces = "";
        } else if (i % 2 === 0) {
            spaces = " ".repeat(n - 1);
        } else {
            spaces = " ".repeat(n);
        }

        // З'єднуємо символи з одним пробілом і додаємо рядок до масиву.
        lines.push(spaces + rowChars.join(' '));
    }

    // --- Нижня половина ---
    // Нижня половина є дзеркальним відображенням верхньої (за винятком центрального рядка).
    // Ми проходимо циклом від передостаннього рядка до першого.
    for (let i = n - 2; i >= 0; i--) {
        // Визначаємо кількість початкових пробілів. Це дзеркальне відображення
        // відступів верхньої половини.
        const spaces = " ".repeat(n - 1 - i);

        // Отримуємо масив символів з відповідного рядка верхньої половини
        // і перевертаємо його для дзеркального відображення.
        const reversedChars = [...topHalfChars[i]].reverse();

        // Додаємо новий рядок до масиву.
        lines.push(spaces + reversedChars.join(' '));
    }

    // З'єднуємо всі рядки символами нового рядка і повертаємо кінцевий рядок.
    return lines.join('\n');
}

//------------ test
const Test = require('@codewars/test-compat');

let assert = require("chai").assert;
describe("Pattern generator", function () {

    var cek = [
        "",
        "x",
        " x\nx x\n x",
        "  x\n   x\nx o x\n x\n  x",
        "   x\n    x\n   o x\nx o o x\n x o\n  x\n   x",
        "    x\n     x\n    o x\n     o x\nx o x o x\n x o\n  x o\n   x\n    x",
        "     x\n      x\n     o x\n      o x\n     x o x\nx o x x o x\n x o x\n  x o\n   x o\n    x\n     x",
        "      x\n       x\n      o x\n       o x\n      x o x\n       x o x\nx o x o x o x\n x o x\n  x o x\n   x o\n    x o\n     x\n      x",
        "       x\n        x\n       o x\n        o x\n       x o x\n        x o x\n       o x o x\nx o x o o x o x\n x o x o\n  x o x\n   x o x\n    x o\n     x o\n      x\n       x",
        "        x\n         x\n        o x\n         o x\n        x o x\n         x o x\n        o x o x\n         o x o x\nx o x o x o x o x\n x o x o\n  x o x o\n   x o x\n    x o x\n     x o\n      x o\n       x\n        x"
    ];
    cek.forEach(function (each, index) {
        it('Should  matches pattern #' + index, function () {
            console.log(each);
            assert.equal(patternGenerator(index).smartTrim(), each);
        });
    });

});
//------------