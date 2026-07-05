Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indexes of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be positive or negative integers; target will always be the sum of two different items from that array).

Based on: https://leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

Напишите функцию, которая принимает массив чисел (целые числа для тестов) и целевое число. Она должна найти два разных элемента в массиве, сумма которых дает целевое значение. Индексы этих элементов должны быть возвращены в виде кортежа/списка (в зависимости от вашего языка программирования) следующим образом: (index1, index2).

В рамках этого задания некоторые тесты могут иметь несколько ответов; принимаются любые допустимые решения.

Входные данные всегда должны быть допустимыми (числа должны представлять собой массив длиной 2 или более, и все элементы должны быть положительными или отрицательными целыми числами; целевое значение всегда будет суммой двух разных элементов из этого массива).

Основано на: https://leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // возвращает [0, 2] или [2, 0]
twoSum([3, 2, 4], 6) // возвращает [1, 2] или [2, 1]