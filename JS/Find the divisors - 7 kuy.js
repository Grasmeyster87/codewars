/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
Examples:

divisors(12) --> [2, 3, 4, 6]
divisors(25) --> [5]
divisors(13) --> "13 is prime"

//-----------------------------

Создайте функцию divisors/Divisors, которая принимает целое число n > 1 
и возвращает массив со всеми делителями этого числа (кроме 1 и самого числа), 
от наименьшего к наибольшему. Если число простое, верните строку '(integer) 
is prime' (null в C#, пустая таблица в COBOL) (используйте Either String a в Haskell и Result<Vec<u32>, String> в Rust).

*/

function divisors(integer) {
    let result = [];    
    for (let i = 2; i < integer; i++ ){
        if (integer % i == 0){
            result.push(i);
        }
    }
    return result.length == 0 ? `${integer} is prime`: result;  
}

console.log(divisors(12)) // --> [2, 3, 4, 6]
console.log(divisors(25)) // --> [5]
console.log(divisors(13)) // --> "13 is prime"