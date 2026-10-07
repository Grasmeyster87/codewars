The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

For example:

Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6 (Sum of [4, -1, 2, 1])

Easy case is when the list is made up of only positive numbers: the maximum sum is the sum of the whole array.
If the list is made up of only negative numbers, return 0.
Your solution should be fast, it will be tested on very large arrays so slow solutions will time out.
Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

Задача поиска подмассива с максимальной суммой заключается в нахождении наибольшей суммы элементов непрерывной подпоследовательности в массиве или списке целых чисел:

Например:

Входные данные: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Результат: 6 (сумма элементов [4, -1, 2, 1])

Простой случай — когда список состоит только из положительных чисел: максимальная сумма равна сумме всех элементов массива.
Если список состоит только из отрицательных чисел, следует вернуть 0.
Ваше решение должно быть эффективным: оно будет тестироваться на массивах очень большого размера, поэтому медленные алгоритмы могут превысить допустимое время выполнения.
Для пустого списка максимальная сумма считается равной нулю. Обратите внимание, что пустой список или массив также является допустимым подсписком (подмассивом).