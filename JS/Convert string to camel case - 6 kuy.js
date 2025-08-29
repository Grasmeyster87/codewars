/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

//--------------------------------------------------------

Дополните метод/функцию так, чтобы он преобразовывал слова, разделённые тире/подчёркиванием, в «верблюжий» регистр. Первое слово в выводе должно быть написано с заглавной буквы только в том случае, если исходное слово было написано с заглавной буквы (также известно как «верхний верблюжий регистр», также часто называемый «паскалевским регистром»). Последующие слова должны всегда начинаться с заглавной буквы.

Примеры

«the-stealth-warrior» преобразуется в «theStealthWarrior»

«The_Stealth_Warrior» преобразуется в «TheStealthWarrior»

«The_Stealth-Warrior» преобразуется в «TheStealthWarrior»
*/


function toCamelCase(str) {
    if (!str) return '';

    // Разделяем строку по тире и подчеркиваниям
    const words = str.split(/[-_]/);

    // Первое слово остается как есть
    const firstWord = words[0];

    // Остальные слова преобразуем: первая буква - заглавная, остальные - строчные
    const camelWords = words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Склеиваем всё вместе
    return firstWord + camelWords.join('');
};

let str1 = 'the-stealth-warrior';
console.log(toCamelCase(str1))


/* test
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
    assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
    assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
    assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
  });
});
*/