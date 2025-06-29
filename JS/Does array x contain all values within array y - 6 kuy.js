/*
We want to extend the array class so that it provides a contains_all? method.
This method will always assume that an array is passed in and will return true if all values in the passed in array are present within the current array.

For example:

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
items.containsAll([1, 2, 3]);  =>  true
items.containsAll([1, 5, 13]);  =>  false // because 13 is not in the items array

Мы хотим расширить класс массива, чтобы он предоставлял метод contains_all?. 
Этот метод всегда будет предполагать, что массив передан, и будет возвращать true, если все значения в переданном массиве присутствуют в текущем массиве.

*/

Object.defineProperty(Array.prototype, "containsAll", {
  value: function containsAll(a) {
    return a.every((item) => this.includes(item));
  },
  writable: true, // Если вы хотите, чтобы свойство можно было изменить
  configurable: true // Если вы хотите, чтобы свойство можно было удалить или изменить его характеристики
});