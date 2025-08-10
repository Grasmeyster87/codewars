/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//----------------

В этом ката речь идет об умножении заданного числа на восемь, если это четное число, и на девять в противном случае.
*/

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}

console.log(simpleMultiplication(2)) // 16
console.log(simpleMultiplication(1))  // 9
console.log(simpleMultiplication(8)) // 64
console.log(simpleMultiplication(4)) // 32
console.log(simpleMultiplication(5))  // 45