/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"

Note: Only lowercased English letters are tested

//----------------------------------------------

Якщо вказано літеру, повернути її позицію в алфавіті.

Вхідні дані :: "a"

Вихідні дані :: "Позиція алфавіту: 1"

Примітка: Перевіряються лише малі англійські літери
*/
const letter = 'A';

function position(letter){
  return `Position of alphabet: ${letter.toLowerCase().charCodeAt(0) - 96}`;
}
console.log(position(letter))
/* test
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(position("a"),"Position of alphabet: 1");
    assert.strictEqual(position("z"),"Position of alphabet: 26");
    assert.strictEqual(position("e"),"Position of alphabet: 5");
  });
});
*/