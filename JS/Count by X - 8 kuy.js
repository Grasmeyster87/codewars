/*

Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).
Examples

x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  --> [2,4,6,8,10]
//----------------------------------------------------------------------------------------
Создайте функцию с двумя аргументами, которая вернет массив первых n кратных x.

Предположим, что и заданное число, и количество подсчетов будут положительными числами больше 0.

Верните результаты в виде массива или списка (в зависимости от языка).
Примеры

*/

function countBy(x, n) {
    let z = [];
    for (let a = x; a <= n * x; a += x) {
        z.push(a);
    }
    return z;
}