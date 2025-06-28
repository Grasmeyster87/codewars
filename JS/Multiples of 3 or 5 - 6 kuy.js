/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
/-----------------------------------------

Если мы перечислим все натуральные числа ниже 10, которые кратны 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих кратных равна 23.

Завершите решение так, чтобы оно возвращало сумму всех кратных 3 или 5 ниже переданного числа.

Кроме того, если число отрицательное, верните 0.

Примечание: если число кратно и 3, и 5, посчитайте его только один раз.

Предоставлено projecteuler.net (Задача 1)
*/

let number = 10;

function solution(number) {
    let result = 0;

    if (i < 0) {
        for (let i = 0; i < number; i++) {
            if ((i % 3 == 0) || (i % 5 == 0)) {
                console.log(i);
                result += i;
            }
        }
    } else {
        return result;
    }
    return result;
}

let res = solution(number);

console.log('res ', res);