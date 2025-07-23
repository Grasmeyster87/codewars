
/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas

//------------------------------------------------------------

Дополните решение так, чтобы оно удаляло весь текст, следующий за любым набором переданных маркеров комментариев. 
Все пробелы в конце строки также должны быть удалены.

Пример:

Входная строка:

яблоки, груши # и бананы
виноград
бананы !яблоки

Ожидаемый результат:

яблоки, груши
виноград
бананы

*/

/* function solution(text, markers) {
  return text
    .split('\n') // разбиваем на строки
    .map(line => {
      // ищем первый маркер на строке
      for (let marker of markers) {
        const index = line.indexOf(marker);
        if (index !== -1) {
          line = line.slice(0, index); // обрезаем по маркеру
        }
      }
      return line.trim(); // убираем пробелы в конце
    })
    .join('\n'); // собираем обратно в текст
} */

function solution(text, markers) {
  // если нет маркеров, возвращаем текст как есть (но без обрезки пробелов в начале)
  if (markers.length === 0) return text.trimEnd();

  return text
    .split('\n')
    .map(line => {
      for (let marker of markers) {
        const index = line.indexOf(marker);
        if (index !== -1) {
          line = line.slice(0, index);
        }
      }
      return line.trimEnd(); // убираем только пробелы справа
    })
    .join('\n');
}

let string = `яблоки, груши # и бананы
виноград
бананы !яблоки`;

let markers = ['#', '!'];
console.log(solution(string, markers));