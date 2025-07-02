/*
At the start of each season, every player in a football team is assigned their own unique squad number. 
Due to superstition or their history certain numbers are more desirable than others.

Write a function generateNumber() that takes two arguments, an array of the current squad numbers (squad) and the new player's desired number (n). 
If the new player's desired number is not already taken, return n, else if the desired number can be formed by adding two digits between 1 and 9, 
return the number formed by joining these two digits together. E.g. If 2 is taken, return 11 because 1 + 1 = 2. Otherwise return null.

Note: Often there will be several different ways to form a replacement number. In these cases the number with lowest first digit should be given priority. 
E.g. If n = 15, but squad already contains 15, return 69, not 78.

//----------------------------------------------------------------

В начале каждого сезона каждому игроку футбольной команды назначается свой уникальный номер команды. 
Из-за суеверий или истории некоторые номера более предпочтительны, чем другие.

Напишите функцию generateNumber(), которая принимает два аргумента, массив текущих номеров команды (squad) 
и желаемый номер нового игрока (n). Если желаемый номер нового игрока еще не занят, верните n, в противном случае, 
если желаемый номер можно получить, сложив две цифры от 1 до 9, верните число, образованное путем объединения этих двух цифр. 
Например, если занято 2, верните 11, потому что 1 + 1 = 2. В противном случае верните null.

Примечание: часто будет несколько разных способов сформировать номер замены. В этих случаях приоритет следует отдать номеру с наименьшей первой цифрой. 
Например, если n = 15, но в команде уже есть 15, верните 69, а не 78.
*/

function generateNumber(squad, n) {
    // Якщо бажаний номер ще не зайнятий — повертаємо його
    //if (!squad.includes(n)) return n;

    // Масив для можливих комбінацій двох цифр, сума яких дорівнює n
    let combinations = [];

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            if (i + j === n) {
                let num = parseInt(`${i}${j}`);
                combinations.push(num);
            }
        }
    }
    console.log(combinations); // Для перевірки, які комбінації були знайдені
    // Сортуємо комбінації спочатку за першою цифрою (i), потім за другою (j)
    combinations.sort((a, b) => {
        let [a1, a2] = String(a).split('').map(Number);
        let [b1, b2] = String(b).split('').map(Number);
        return a1 - b1 || a2 - b2;
    });

    // Знаходимо перший номер, який ще не зайнятий
    for (let num of combinations) {
        if (!squad.includes(num)) return num;
    }

    // Якщо жодна комбінація не підходить — повертаємо null
    return null;
}

console.log(generateNumber([1, 2, 3, 4, 6, 9, 10, 15, 69], 13));