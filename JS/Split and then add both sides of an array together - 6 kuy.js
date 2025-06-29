/*
Inspired by the Fold an Array kata. This one is sort of similar but a little different.
Task

You will receive an array as parameter that contains 1 or more integers and a number n.

Here is a little visualization of the process:
Step 1: Split the array in two:
[1, 2, 5, 7, 2, 3, 5, 7, 8]
      /            \
[1, 2, 5, 7]    [2, 3, 5, 7, 8]

Step 2: Put the arrays on top of each other:
   [1, 2, 5, 7]
[2, 3, 5, 7, 8]
Step 3: Add them together:
[2, 4, 7, 12, 15]
Repeat the above steps n times or until there is only one number left, and then return the array.

Example

Input: arr=[4, 2, 5, 3, 2, 5, 7], n=2


Round 1
-------
step 1: [4, 2, 5]  [3, 2, 5, 7]

step 2:    [4, 2, 5]
        [3, 2, 5, 7]

step 3: [3, 6, 7, 12]


Round 2
-------
step 1: [3, 6]  [7, 12]

step 2:  [3,  6]
         [7, 12]

step 3: [10, 18]


Result: [10, 18]

//---------------------------------------------------------------------
Вдохновлено ката «Сложить массив». Это немного похоже, но немного отличается.
Задача

Вы получите массив в качестве параметра, который содержит 1 или более целых чисел и число n.

Вот небольшая визуализация процесса:
Шаг 1: Разделите массив на две части:
[1, 2, 5, 7, 2, 3, 5, 7, 8]
      /            \
[1, 2, 5, 7]    [2, 3, 5, 7, 8]

Шаг 2: Поместите массивы друг на друга:

   [1, 2, 5, 7]
[2, 3, 5, 7, 8]
Шаг 3: Сложите их вместе:
[2, 4, 7, 12, 15]

Повторите указанные выше шаги n раз или пока не останется только одно число, а затем верните массив.
Example

Input: arr=[4, 2, 5, 3, 2, 5, 7], n=2


Round 1
-------
step 1: [4, 2, 5]  [3, 2, 5, 7]

step 2:    [4, 2, 5]
        [3, 2, 5, 7]

step 3: [3, 6, 7, 12]


Round 2
-------
step 1: [3, 6]  [7, 12]

step 2:  [3,  6]
         [7, 12]

step 3: [10, 18]


Result: [10, 18]

*/
let arr = [1, 2, 5, 7, 2, 3, 5, 7, 8];
let n = 2;

function splitAndAdd(arr, n) {
    while (n > 0 && arr.length > 1) { // Добавлено условие для остановки цикла
        let mid = Math.floor(arr.length / 2);
        let arr1 = arr.slice(0, mid);
        let arr2 = arr.slice(mid);

        if (arr1.length > arr2.length) { // Если первый массив длиннее, добавляем 0 в начало второго
            arr2.unshift(0);
        } else if (arr2.length > arr1.length) { // Если второй массив длиннее, добавляем 0 в начало первого
            arr1.unshift(0);
        }

        let arr_res = [];
        for (let i = 0; i < arr1.length; i++) { // Складываем соответствующие элементы
            arr_res.push(arr1[i] + arr2[i]);
        }

        arr = arr_res; // Обновляем массив для следующей итерации
        n -= 1; // Уменьшаем счетчик n
    }
    return arr;
}

let res = splitAndAdd(arr, n);
console.log('res - ',res)