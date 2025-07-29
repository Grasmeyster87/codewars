/*
The makeLooper() function (or make_looper in your language) takes a string (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.

For example:

var abc = makeLooper('abc');
abc(); // should return 'a' on this first call
abc(); // should return 'b' on this second call
abc(); // should return 'c' on this third call
abc(); // should return 'a' again on this fourth call

Different loopers should not affect each other, so be wary of unmanaged global state.
//----------------------------------------------------------

Функция makeLooper() (или make_looper в вашем языке) принимает в качестве аргумента строку (ненулевой длины). 
Она возвращает функцию. Возвращаемая функция будет возвращать последовательные символы строки при последующих вызовах. По достижении конца строки она начнёт с начала.

Например:

var abc = makeLooper('abc');
abc(); // при первом вызове должна вернуть 'a'
abc(); // при втором вызове должна вернуть 'b'
abc(); // при третьем вызове должна вернуть 'c'
abc(); // при четвёртом вызове должна снова вернуть 'a'

Различные циклеры не должны влиять друг на друга, поэтому будьте осторожны с неуправляемым глобальным состоянием.
*/

function makeLooper(str) {
    let index = 0;
    return function() {
        const char = str[index];
        index = (index + 1) % str.length;
        return char;
    };
}

var abc = makeLooper('abc');
console.log(abc()); // should return 'a' on this first call
console.log(abc()); // should return 'b' on this second call
console.log(abc()); // should return 'c' on this third call
console.log(abc()); // should return 'a' again on this fourth call

/*
//------------- test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", function() {
  const abc = makeLooper("abc");
  it("Should cycle through the given string", function() {
    assert.strictEqual(abc(), "a")
    assert.strictEqual(abc(), "b")
    assert.strictEqual(abc(), "c")
  });
  it("Should return to its initial cycle once it reaches the end", () => {
    assert.strictEqual(abc(), "a")
    assert.strictEqual(abc(), "b")
    assert.strictEqual(abc(), "c")
  })
});
*/