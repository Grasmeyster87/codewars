/*
  
 JS Golfing Series 
 

Task:

Check if the input ( one letter ) is Uppercase with no more than 9 characters.

No need to check for invalid input. Only letters will be tested. Return true if Uppercase and false if Lowercase.
//------------
Серия JS Golfing

Задание:

Проверьте, является ли входное значение (одна буква) заглавным и содержит не более 9 символов.

Проверка на недопустимость входных данных не требуется. Будут проверяться только буквы. Возвращает true, если заглавные, и false, если строчные.
*/

//f=a=>a<97
//f=a=>a>96 // не відбувається перетворення Чому?
//f=a=>a<'a'; // код працює але не підходить томущо має 10 символів
f=c=>c<{};
console.log(f("A")); // true
console.log(f("b")); // false
console.log(f("C")); // true
console.log(f("a")); // false
console.log(f("Z")); // true
console.log(f("f")); // false
/*----- test
describe('tests', function() {
    const { assert } = require('chai');

    it('sample tests', function() {
        assert.strictEqual(f("A"), true);
        assert.strictEqual(f("b"), false);
        assert.strictEqual(f("C"), true);
        assert.strictEqual(f("a"), false);
        assert.strictEqual(f("Z"), true);
        assert.strictEqual(f("f"), false);
    });
});
*/

