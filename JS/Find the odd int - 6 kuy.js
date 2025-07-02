/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//-----------------------------------------------------------------------------------

Учитывая массив целых чисел, найдите то, которое встречается нечетное количество раз.

Всегда будет только одно целое число, которое встречается нечетное количество раз.
Примеры

[7] должно вернуть 7, потому что оно встречается 1 раз (что нечетно).

[0] должно вернуть 0, потому что оно встречается 1 раз (что нечетно).

[1,1,2] должно вернуть 2, потому что оно встречается 1 раз (что нечетно).

[0,1,0,1,0] должно вернуть 0, потому что оно встречается 3 раза (что нечетно).

[1,2,2,3,3,3,4,3,3,3,2,2,1] должно вернуть 4, потому что оно встречается 1 раз (что нечетно).
*/

function findOdd(A) {
  return A.reduce((acc, val) => acc ^ val, 0);
}