/*
In the drawing below we have a part of the Pascal's triangle, lines are numbered from zero (top). 
The left diagonal in pale blue with only numbers equal to 1 is diagonal zero, then in dark green (1, 2, 3, 4, 5, 6, 7) is diagonal 1, 
then in pale green (1, 3, 6, 10, 15, 21) is diagonal 2 and so on.

We want to calculate the sum of the binomial coefficients on a given diagonal. The sum on diagonal 0 is 8 (we'll write it S(7, 0), 7 
is the number of the line where we start, 0 is the number of the diagonal). In the same way S(7, 1) is 28, S(7, 2) is 56.

Can you write a program which calculate S(n, p) where n is the line where we start and p is the number of the diagonal?

The function will take n and p (with always: n > 0, p >= 0, n > p) as parameters and will return the sum
Examples:

diagonal(20, 3) => 5985
diagonal(20, 4) => 20349

Hint:

When following a diagonal from top to bottom have a look at the numbers on the diagonal at its right.
//---------------------------------

На рисунке ниже показан фрагмент треугольника Паскаля, линии которого пронумерованы от нуля (сверху). 
Левая диагональ бледно-голубого цвета, отмеченная только числами, равными 1, — это диагональ 0, затем тёмно-зелёного цвета (1, 2, 3, 4, 5, 6, 7) — 
диагональ 1, затем бледно-зелёного цвета (1, 3, 6, 10, 15, 21) — диагональ 2 и так далее.

Мы хотим вычислить сумму биномиальных коэффициентов по заданной диагонали. Сумма по диагонали 0 равна 8 (запишем её как S(7, 0), где 7 — номер линии, 
с которой начинается вычисление, 0 — номер диагонали). Аналогично, S(7, 1) равно 28, S(7, 2) равно 56.

Можете ли вы написать программу, вычисляющую S(n, p), где n — линия, с которой начинается вычисление, а p — номер диагонали?

Функция будет принимать n и p (всегда: n > 0, p >= 0, n > p) в качестве параметров и вернет сумму
Examples:

diagonal(20, 3) => 5985
diagonal(20, 4) => 20349

Подсказка:

Двигаясь по диагонали сверху вниз, обратите внимание на числа на диагонали справа от неё.
*/
function diagonal(n, p) {
    // Вычисление биномиального коэффициента C(a, b)
    function binomial(a, b) {
        if (b === 0 || b === a) return 1;
        let res = 1;
        for (let i = 1; i <= b; i++) {
            res *= (a - i + 1) / i;
        }
        return res;
    }

    // Суммируем элементы диагонали p от строки p до строки n
    let sum = 0;
    for (let k = p; k <= n; k++) {
        sum += binomial(k, p);
    }
    return Math.round(sum); // округляем, чтобы избежать ошибок с плавающей точкой
}

console.log(diagonal(20, 3)) // => 5985
console.log(diagonal(20, 4)) // => 20349


/* test 
const { assert } = require('chai');

describe("Basic tests", function() {
  it("Small numbers", function() {
    assert.strictEqual(diagonal(20, 3), 5985);
    assert.strictEqual(diagonal(20, 4), 20349);
    assert.strictEqual(diagonal(20, 5), 54264);
    assert.strictEqual(diagonal(20, 15), 20349);
    assert.strictEqual(diagonal(100, 0), 101);
  });
});
*/