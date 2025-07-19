/*
You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

    The resulting array is sorted in ascending order.

    Any duplicate values are removed, so each integer appears only once.

    If both input arrays are empty, return an empty array.

No input validation is needed, as both arrays are guaranteed to contain zero or more integers.
Examples (input -> output)

* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

Happy coding!

//--------------------------------------------------------------------------------------

Вам даны два отсортированных массива, содержащих только целые числа. 
Эти массивы можно сортировать как по возрастанию, так и по убыванию. 
Ваша задача — объединить их в один массив, обеспечив следующее:

Результирующий массив отсортирован по возрастанию.

Все повторяющиеся значения удаляются, поэтому каждое целое число встречается только один раз.

Если оба входных массива пусты, вернуть пустой массив.

Проверка входных данных не требуется, так как оба массива гарантированно содержат ноль или более целых чисел. 
Примеры (вход -> выход)

* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

Удачного программирования!
*/

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4, 1];


function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

console.log(mergeArrays(arr1, arr2));