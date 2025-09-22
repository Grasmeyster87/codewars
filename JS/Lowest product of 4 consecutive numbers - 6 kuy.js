/*
Create a function that receives a string consists of only digit characters ('0' to '9'), and returns the lowest product of 4 consecutive digits within that string.

This should only work if the number has 4 digits or more. If not, return "Number is too small" instead.
Example

"123456789" --> 24    // 1*2*3*4
"35" --> "Number is too small"

Создайте функцию, которая принимает строку, состоящую только из цифр (от «0» до «9»), и возвращает наименьшее произведение четырёх последовательных цифр в этой строке.

Это должно работать только если число состоит из четырёх или более цифр. В противном случае возвращается «Число слишком мало».
Пример

«123456789» --> 24 // 1*2*3*4
«35» --> «Число слишком мало»
*/

function lowestProduct(input) {
    if (input.length < 4) return "Number is too small";

    let minProduct = Infinity;

    for (let i = 0; i <= input.length - 4; i++) {
        const digits = input.slice(i, i + 4).split('').map(Number);
        const product = digits.reduce((acc, val) => acc * val, 1);
        if (product < minProduct) minProduct = product;
    }

    return minProduct;
}


/*  --- test
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(lowestProduct("123456789"), 24); 
    assert.strictEqual(lowestProduct("234567899"), 120); 
    assert.strictEqual(lowestProduct("2345611117899"), 1);
    assert.strictEqual(lowestProduct("333"), "Number is too small");
    assert.strictEqual(lowestProduct("1234111"), 4, "Numbers should be consecutives");        
  });
});
*/