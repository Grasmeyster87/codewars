/*
Imagine you are in a universe where you can just perform the following arithematic operations:

    Addition (+)
    Subtraction (-)
    Multiplication (*)
    Integer Division (/)

A postfix expression is an expression where the operands come after the operator. Operators and operands are separared by a space.

Write a function that takes a string representing a postfix expression as input and returns what it evaluates to as an integer.

    You can assume that the input is always valid.
    You can assume there will be no divisions by zero

Examples

    25 45 + is equivalent to 25 + 45 --> 70
    20 40 + 60 * is equivalent to (20 + 40) * 60 --> 3600
    20 40 60 + * is equivalent to 20 * (40 + 60) --> 2000

//-------------------------------------------------------

Представьте, что вы находитесь во вселенной, где можно выполнять следующие арифметические операции:

Сложение (+)

Вычитание (-)

Умножение (*)

Целочисленное деление (/)

Постфиксное выражение — это выражение, в котором операнды следуют за оператором. Операторы и операнды разделяются пробелом.

Напишите функцию, которая принимает в качестве входных данных строку, представляющую постфиксное выражение, и возвращает целое число, которое оно вычисляет.

Предполагайте, что входные данные всегда допустимы.
Предполагайте, что делений на ноль не будет.

Примеры

25 45 + эквивалентно 25 + 45 -> 70
20 40 + 60 * эквивалентно (20 + 40) * 60 -> 3600
20 40 60 + * эквивалентно 20 * (40 + 60) -> 2000
*/

let test1 = '20 40 60 + *';

/* function postfixEvaluator(string) {
    let massiv = string.split(' ');
    for (let i = 0; i < massiv.length; i++) {
        if (isNaN(massiv[i])) {
            let a = +massiv[i - 2];
            let b = +massiv[i - 1];
            let sign = massiv[i];
            let res = 0;
            switch (sign) {
                case '+': res = a + b; break;
                case '-': res = a - b; break;
                case '*': res = a * b; break;
                case '/': res = parseInt(a / b); break;
            }
            massiv.splice(i - 2, 3, res);
            i -= 2;
        }
    }
    return +massiv[0];
}

console.log(postfixEvaluator(test1)); */


/* function postfixEvaluator(expression) {
    const tokens = expression.split(' ');
    const stack = [];

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(Math.trunc(a / b)); break;
                default: throw new Error('Invalid operator: ' + token);
            }
        }
    }
    return stack.pop();
}
console.log(postfixEvaluator(test1)); */




