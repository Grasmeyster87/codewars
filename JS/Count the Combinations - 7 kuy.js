/*

Consider a sequence of integers xs, and a target integer n. Your task is to write a function which counts how many combinations of indexes of xs meet two rules:

    The size of the combination must be 1 less than the size of xs
    The sum of elements corresponding to the indexes must equal n

For example:

xs = [5, 0, 0, 2], n = 7
All combinations of indexes (of size 3)
{0, 1, 2} -> 5 + 0 + 0 = 5
{0, 1, 3} -> 5 + 0 + 2 = 7
{0, 2, 3} -> 5 + 0 + 2 = 7
{1, 2, 3} -> 0 + 0 + 2 = 2
Only 2 combinations match the target -> Answer = 2

//-------------------------------------------------
Розглянемо послідовність цілих чисел xs та цільове ціле число n. Ваше завдання — написати функцію, яка підраховує, скільки комбінацій індексів xs відповідають двом правилам:

Розмір комбінації має бути на 1 меншим за розмір xs
Сума елементів, що відповідають індексам, має дорівнювати n

Наприклад:

xs = [5, 0, 0, 2], n = 7
Усі комбінації індексів (розміру 3)
{0, 1, 2} -> 5 + 0 + 0 = 5
{0, 1, 3} -> 5 + 0 + 2 = 7
{0, 2, 3} -> 5 + 0 + 2 = 7
{1, 2, 3} -> 0 + 0 + 2 = 2
Тільки 2 комбінації відповідають цільовому значенню -> Відповідь = 2
*/
let arr1 = [5, 0, 0, 2];
let n1 = 7;
function numCombo(arr, num) {
    let count = 0;
    const k = arr.length - 1;

    function helper(start, combo) {
        if (combo.length === k) {
            const sum = combo.reduce((a, b) => a + b, 0);
            if (sum === num) count++;
            return;
        }

        for (let i = start; i < arr.length; i++) {
            helper(i + 1, [...combo, arr[i]]);
        }
    }

    helper(0, []);
    return count;
};

console.log(numCombo(arr1, n1));