/*
Vicky is quite the small wonder. Most people don't even realize she's not a real girl, 
but a robot living amongst us. Sure, if you stick around her home for a while you might see 
her creator open up her back and make a few tweaks and even see her recharge in the closet instead of sleeping in a bed.

In this kata, we're going to help Vicky keep track of the words she's learning.

Write a function, learnWord(word) ( LearnWord(word) in C# ) which is a method of the Robot object.
 The function should report back whether the word is now stored, or if she already knew the word.

Example:

var vicky = new Robot();
vicky.learnWord('hello') -> 'Thank you for teaching me hello'
vicky.learnWord('abc') -> 'Thank you for teaching me abc'
vicky.learnWord('hello') -> 'I already know the word hello'
vicky.learnWord('wow!') -> 'I do not understand the input'

Case shouldn't matter. Only alpha characters are valid. There's also a little trick here. Enjoy!
//--------------------------------------------------------
Вики — настоящее маленькое чудо. Большинство людей даже не догадываются, 
что она не настоящая девушка, а робот, живущий среди нас. Конечно, если вы немного побудете у неё дома, то, 
возможно, увидите, как её создатель вскрывает ей спину и вносит несколько изменений, и даже увидите, как она заряжается в шкафу, а не спит в кровати.

В этом ката мы поможем Вики следить за словами, которые она учит.

Напишите функцию learnWord(word) ( LearnWord(word) в C# ), которая является методом объекта Robot. Функция должна сообщать, 
сохранено ли слово в памяти или она его уже знала.
*/

function Robot() {
  // Конструктор теперь может быть пустым, так как словарный запас
  // будет храниться в прототипе.
}

// Создаем ОДИН общий словарный запас для ВСЕХ роботов в прототипе.
Robot.prototype.words = new Set(['thank', 'you', 'for', 'teaching', 'me', 'i', 'already', 'know', 'the', 'word', 'do', 'not', 'understand', 'input']);

Robot.prototype.learnWord = function(word) {
  // Проверка на валидность: только буквы
  // Используем \s* чтобы разрешить пробелы вокруг слова,
  // и trim() чтобы их убрать. Это делает проверку надежнее.
  const trimmedWord = word.trim();
  if (!/^[a-zA-Z]+$/.test(trimmedWord)) {
    return 'I do not understand the input';
  }

  // Приводим слово к нижнему регистру для сравнения
  const normalized = trimmedWord.toLowerCase();

  // ИСПРАВЛЕНИЕ: Обращаемся к 'words' через 'this'. Прототипная цепочка
  // найдет общее свойство 'words' в Robot.prototype.
  if (this.words.has(normalized)) {
    // Используем оригинальное слово из аргумента для вывода
    return `I already know the word ${word}`;
  } else {
    this.words.add(normalized);
    // Используем оригинальное слово из аргумента для вывода
    return `Thank you for teaching me ${word}`;
  }
};
let vicky = new Robot();
let vicky1 = new Robot();

console.log(vicky.learnWord('hello')); //'Thank you for teaching me hello'
console.log(vicky.learnWord('world')); //'Thank you for teaching me world'
console.log(vicky.learnWord('goodbye')); //'Thank you for teaching me goodbye'
console.log(vicky.learnWord('world')); //'I already know the word world'
console.log(vicky.learnWord('World')); //'I already know the word World'
console.log('\n\n')

console.log(vicky1.learnWord('hello')); //'Thank you for teaching me hello'
console.log(vicky1.learnWord('world')); //'Thank you for teaching me world'
console.log(vicky1.learnWord('goodbye')); //'Thank you for teaching me goodbye'
console.log(vicky1.learnWord('world')); //'I already know the word world'
console.log(vicky1.learnWord('World')); //'I already know the word World'
/*
test
const { assert } = require('chai');

describe('Example tests', function() {
  it('Teaching Vicky new words:', function() {
    let vicky = new Robot();
    assert.strictEqual(vicky.learnWord('hello'),'Thank you for teaching me hello');
    assert.strictEqual(vicky.learnWord('world'),'Thank you for teaching me world');
    assert.strictEqual(vicky.learnWord('goodbye'),'Thank you for teaching me goodbye');
    assert.strictEqual(vicky.learnWord('world'),'I already know the word world');
    assert.strictEqual(vicky.learnWord('World'),'I already know the word World');
  });
})
*/