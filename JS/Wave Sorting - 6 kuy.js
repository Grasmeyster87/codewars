/*
A list of integers is sorted in “Wave” order if alternate items are not less than their immediate neighbors (thus the other alternate items are not greater than their immediate neighbors).

Thus, the array [4, 1, 7, 5, 6, 2, 3] is in Wave order because 4 >= 1, then 1 <= 7, then 7 >= 5, then 5 <= 6, then 6 >= 2, and finally 2 <= 3.

The wave-sorted lists has to begin with an element not less than the next, so [1, 4, 5, 3] is not sorted in Wave because 1 < 4

Your task is to implement a function that takes a list of integers and sorts it into wave order in place; your function shouldn't return anything.

Note:

    The resulting array shouldn't necessarily match anyone in the tests, a function just checks if the array is now wave sorted.
//-----------------------------------------------------------------------
Список целых чисел отсортирован в волновом порядке, если альтернативные элементы не меньше своих ближайших соседей (следовательно, остальные альтернативные элементы не больше своих ближайших соседей).

Таким образом, массив [4, 1, 7, 5, 6, 2, 3] отсортирован в волновом порядке, потому что 4 >= 1, затем 1 <= 7, затем 7 >= 5, затем 5 <= 6, затем 6 >= 2 и, наконец, 2 <= 3.

Списки, отсортированные волновым порядком, должны начинаться с элемента, не меньшего следующего, поэтому [1, 4, 5, 3] не отсортирован в волновом порядке, потому что 1 < 4.

Ваша задача — реализовать функцию, которая принимает список целых чисел и сортирует его в волновом порядке на месте; ваша функция не должна ничего возвращать.

Примечание:

Результирующий массив не обязательно должен соответствовать ни одному элементу в тестах; функция просто проверяет, отсортирован ли массив волновым порядком.

*/
let arr = [1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4];

function waveSort(arr) {
    arr.sort((a, b) => a - b); // Сортируем по возрастанию

    for (let i = 0; i < arr.length - 1; i += 2) {
        // Меняем местами каждую пару
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    return arr;
};

console.log(waveSort(arr));