/*
In programming you know the use of the logical negation operator (!), it reverses the meaning of a condition.

!false = true
!!false = false

Your task is to complete the function 'negationValue()' that takes a string of negations with a value and returns what the value would be if those negations were applied to it.

negationValue("!", false); //=> true
negationValue("!!!!!", true); //=> false
negationValue("!!", []); //=> true

Do not use the eval() function or the Function() constructor in JavaScript.

Note: Always return a boolean value, even if there're no negations.
//-----------------------------------------------------------------

В программировании вы знакомы с использованием оператора логического отрицания (!), который меняет смысл условия на противоположный.

!false = true
!!false = false

Ваша задача — дописать функцию 'negationValue()', которая принимает строку отрицаний со значением и возвращает значение, которое было бы, если бы к ней были применены эти отрицания.

negationValue("!", false); //=> true
negationValue("!!!!!", true); //=> false
negationValue("!!", []); //=> true

Не используйте функцию eval() или конструктор Function() в JavaScript.

Примечание: Всегда возвращайте логическое значение, даже если отрицаний нет.
*/

function negationValue(string, value) {
  let result = Boolean(value); // Преобразуем начальное значение в булево
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '!') {
      result = !result;
    }
  }
  return result;
}




/* test
const { assert } = require('chai');

describe("Basic tests", function() {
  it("should handle basic negation cases", function() {
    assert.deepEqual(negationValue("!", false), true);
    assert.deepEqual(negationValue("!", true), false);
    assert.deepEqual(negationValue("!!!", []), false);
  });
});
*/