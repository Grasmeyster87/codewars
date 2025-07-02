/*
Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.

Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain:

group([3, 2, 6, 2, 1, 3])
>>> [[3, 3], [2, 2], [6], [1]]

Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.

//---------------------------------------------------------------------------------------
Сэм — страстный коллекционер чисел. Каждый раз, когда он находит новое число, он бросает его наверх своей стопки чисел. 
Помогите Сэму организовать его коллекцию, чтобы он мог отвезти ее на Международную конференцию коллекционеров чисел в Кельне.

Если задан массив чисел, ваша функция должна возвращать массив массивов, где каждый подмассив содержит все дубликаты определенного числа. 
Подмассивы должны быть в том же порядке, что и первое вхождение числа, которое они содержат:

group([3, 2, 6, 2, 1, 3])
>>> [[3, 3], [2, 2], [6], [1]]

Предположим, что входные данные всегда будут массивом чисел. 
Если входные данные — пустой массив, должен быть возвращен пустой массив.
*/

function group(arr) {
  const seen = new Map();
  
  for (let num of arr) {
    if (!seen.has(num)) {
      seen.set(num, [num]);
    } else {
      seen.get(num).push(num);
    }
  }

  return Array.from(seen.values());
}