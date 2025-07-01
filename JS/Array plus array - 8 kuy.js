/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

//--------------------------------------

Я новичок в программировании и теперь хочу получить сумму двух массивов... На самом деле сумму всех их элементов. Буду признателен за помощь.

P.S. Каждый массив включает только целые числа. Вывод тоже является числом.
*/
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function arrayPlusArray(arr1, arr2) {
    let res = 0;
    // Определяем длину одного из массивов, так как они должны быть одинаковой длины
    const maxLength = Math.max(arr1.length, arr2.length);
    
    for (let a = 0; a < maxLength; a++) {
        // Проверяем, существует ли элемент в каждом массиве, чтобы избежать ошибок при доступе к несуществующим индексам
        if (a < arr1.length) {
            res += arr1[a];
        }
        if (a < arr2.length) {
            res += arr2[a];
        }
    }
    return res;
}

let res = arrayPlusArray(arr1, arr2);
console.log(res);