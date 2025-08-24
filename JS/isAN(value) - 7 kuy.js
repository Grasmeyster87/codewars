/*
isNaN doesn't work very well. We want it to tell us whether the value or object we're dealing with is a number or not. Instead, it tells us if the value is equal to the NaN value it has on-record.

So let's make a proper function, called isAN, for is A Number. If you pass it a value, it will return true if a value is a valid primitive number or Number object, and false if not.
//-------------------------------
Функция isNaN работает не очень хорошо. Мы хотим, чтобы она определяла, 
является ли значение или объект числом. Вместо этого она определяет, равно ли значение значению NaN, которое хранится в памяти.

Давайте создадим полноценную функцию isAN для функции is A Number. 
Если передать ей значение, она вернёт true, если значение является допустимым примитивным числом или объектом Number, и false в противном случае.

*/

function isAN(value) {
    if (typeof value === 'number') {
        return !Number.isNaN(value);
    }
    if (value instanceof Number) {
        return !Number.isNaN(value.valueOf());
    }
    return false;
}

console.log(isAN('123'), ' - false');
console.log(isAN(Infinity), ' - true');
console.log(isAN(new Number(123)), ' - true');
console.log(isAN(123), ' - true');
console.log(isAN(NaN), ' - false');
console.log(isAN(true), ' - false');
console.log(isAN(undefined), ' - false');
console.log(isAN(null), ' - false');
console.log(isAN(Math.PI), ' - true');
console.log(isAN({ valueOf() { return 123; } }), ' - false');
console.log(isAN(123n), ' - false');                      // 

/* test
describe("Solution", function() {
    const assert = require("chai").assert;

    it("sample tests", function() {
        assert.strictEqual(isAN('123'), false);
        assert.strictEqual(isAN(Infinity), true);
        assert.strictEqual(isAN(new Number(123)), true);
        assert.strictEqual(isAN(123), true);
        assert.strictEqual(isAN(NaN), false);
        assert.strictEqual(isAN(true), false);
        assert.strictEqual(isAN(undefined), false);
        assert.strictEqual(isAN(null), false);
        assert.strictEqual(isAN(Math.PI), true);
        assert.strictEqual(isAN({valueOf(){return 123;}}), false);
        assert.strictEqual(isAN(123n), false);
    });
});
*/