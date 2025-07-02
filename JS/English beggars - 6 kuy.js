/*
Born a misinterpretation of this kata, your task here is pretty simple: given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

Also note that not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggars will of course take nothing (0).

Note: in case you don't get why this kata is about English beggars, then you are not familiar on how religiously queues are taken in the kingdom ;)

Note 2: do not modify the input array.
//---------------------------------------------------------------

996 / 5 000
Родившийся в результате неправильного толкования этого ката, ваша задача здесь довольно проста: 
учитывая массив значений и количество нищих, вы должны вернуть массив с суммой того, 
что каждый нищий приносит домой, предполагая, что все они регулярно ходят по очереди, от первого до последнего.

Например: [1,2,3,4,5] для 2 нищих вернет результат [9,6], так как первый возьмет [1,3,5], второй заберет [2,4].

Тот же массив с 3 нищими, в свою очередь, дал бы лучший результат для второго нищего: [5,7,3], 
так как они соответственно возьмут [1,4], [2,5] и [3].

Также обратите внимание, что не все нищие должны брать одинаковое количество «предложений», 
то есть длина массива не обязательно кратна n; длина может быть еще короче, и в этом случае последние нищие, конечно, ничего не возьмут (0).

Примечание: если вы не понимаете, почему эта ката про английских нищих, то вы не знаете, насколько религиозно относятся к очередям в королевстве ;)

Примечание 2: не изменяйте входной массив.
*/
const arr1 = [1,2,3,4,5];
const n  = 2;

function beggars(values, n) {
    if (n === 0) return []; // Если бедняков нет, возвращаем пустой массив

    let result = Array(n).fill(0); // Создаем массив для результатов, заполненный нулями

    for (let a = 0; a < values.length; a++) {
        result [a % n] += values[a];
    }
    return result;
};

let res = beggars(arr1, n);
console.log(res); // [9, 6];