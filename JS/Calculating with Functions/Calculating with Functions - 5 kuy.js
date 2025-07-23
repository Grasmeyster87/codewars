/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five()));   //  must return 35
four(plus(nine()));     //  must return 13
eight(minus(three()));  //  must return 5
six(dividedBy(two()));  //  must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
//------------------------------------------------------------------------------------------

На этот раз мы хотим записать вычисления с помощью функций и получить результаты. Давайте рассмотрим несколько примеров:

seven(times(five())); // должно вернуть 35
four(plus(nine())); // должно вернуть 13
eight(minus(three())); // должно вернуть 5
six(dividedBy(two())); // должно вернуть 3

Требования:

Должна быть функция для каждого числа от 0 («ноль») до 9 («девять»).
Должна быть функция для каждой из следующих математических операций: плюс, минус, умножить, разделить на.
Каждое вычисление состоит ровно из одной операции и двух чисел.
Самая внешняя функция представляет левый операнд, самая внутренняя функция — правый операнд.
Деление должно быть целочисленным. Например, это должно вернуть 2, а не 2.666666...:

eight(dividedBy(three()));
*/

function zero(op) { return op ? op(0) : 0; }
function one(op) { return op ? op(1) : 1; }
function two(op) { return op ? op(2) : 2; }
function three(op) { return op ? op(3) : 3; }
function four(op) { return op ? op(4) : 4; }
function five(op) { return op ? op(5) : 5; }
function six(op) { return op ? op(6) : 6; }
function seven(op) { return op ? op(7) : 7; }
function eight(op) { return op ? op(8) : 8; }
function nine(op) { return op ? op(9) : 9; }

function plus(right) {
  return function (left) {
    return left + right;
  };
}

function minus(right) {
  return function (left) {
    return left - right;
  };
}

function times(right) {
  return function (left) {
    return left * right;
  };
}

function dividedBy(right) {
  return function (left) {
    return Math.floor(left / right);
  };
}
console.log(seven(times(five ())));
/*
тесты
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(seven(times    (five ())), 35, "seven(times(five ()))");
    assert.strictEqual(four (plus     (nine ())), 13, "four (plus(nine ()))");
    assert.strictEqual(eight(minus    (three())),  5, "eight(minus(three()))");
    assert.strictEqual(six  (dividedBy(two  ())),  3, "six(dividedBy(two()))");
  });
});
*/