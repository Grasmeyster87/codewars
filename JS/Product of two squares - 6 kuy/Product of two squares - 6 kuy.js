/*
Given a strictly positive integer n, the goal of this Kata is to find every possible pair of integers (a, b) whose product of their squares is equal to n:
n=a²∗b²n = a² * b²n=a²∗b²

Return a 2D array of these pairs.

    The order of elements within a pair does not matter: [2, 3] is considered the same as [3, 2].
    The order of the pairs within the array does not matter: [ [1, 2], [3, 4] ] is the same as [ [3, 4], [2, 1] ].
    The array should not contain duplicate pairs. [2, 1] is a duplicate of [1, 2].
    If there are no pairs that satisfy the equation, return an empty array [].

Examples

    256 --> [ [1, 16], [2, 8], [4, 4] ] (or [ [4, 4], [16, 1], [2, 8] ] , or [ [1, 16], [8, 2], [4, 4] ]... etc.)
    2 --> []
    1 --> [ [1, 1] ]
    81 --> [ [1, 9], [3, 3] ]

//--------------------------------------
782 / 5 000
Для заданного строго положительного целого числа n цель этого ката — найти все возможные пары целых чисел (a, b), произведение квадратов которых равно n:
n=a²∗b²n = a² * b²n=a²∗b²

Вернуть двумерный массив этих пар.

Порядок элементов в паре не имеет значения: [2, 3] считается тем же, что и [3, 2].
Порядок пар в массиве не имеет значения: [[1, 2], [3, 4]] считается тем же, что и [[3, 4], [2, 1]].
Массив не должен содержать повторяющихся пар. [2, 1] является дубликатом [1, 2].
Если пар, удовлетворяющих уравнению, нет, вернуть пустой массив [].

Примеры

256 --> [ [1, 16], [2, 8], [4, 4] ] (или [ [4, 4], [16, 1], [2, 8] ] , или [ [1, 16], [8, 2], [4, 4] ]... и т. д.)
2 --> []
1 --> [ [1, 1] ]
81 --> [ [1, 9], [3, 3] ]
Dlya zadannogo strogo polozhitel'nogo tselogo chisla n tsel' etogo kata — nayti vse vozmozhnyye pary tselykh chisel (a, b), proizvedeniye kvadratov kotorykh ravno n:
n=a²∗b²n = a² * b²n=a²∗b²

Vernut' dvumernyy massiv etikh par.

Poryadok elementov v pare ne imeyet znacheniya: [2, 3] schitayetsya tem zhe, chto i [3, 2].
Poryadok par v massive ne imeyet znacheniya: [[1, 2], [3, 4]] schitayetsya tem zhe, chto i [[3, 4], [2, 1]].
Massiv ne dolzhen soderzhat' povtoryayushchikhsya par. [2, 1] yavlyayetsya dublikatom [1, 2].
Yesli par, udovletvoryayushchikh uravneniyu, net, vernut' pustoy massiv [].

Primery

256 --> [ [1, 16], [2, 8], [4, 4] ] (ili [ [4, 4], [16, 1], [2, 8] ] , ili [ [1, 16], [8, 2], [4, 4] ]... i t. d.)
2 --> []
1 --> [ [1, 1] ]
81 --> [ [1, 9], [3, 3] ]
Ещё
Отправить отзыв

*/
const n = 256;

function squareProduct(n) {
    const result = [];
    const seen = new Set();

    for (let a = 1; a * a <= n; a++) {
        const aSquared = a * a;
        if (n % aSquared !== 0) continue;

        const bSquared = n / aSquared;
        const b = Math.sqrt(bSquared);

        if (Number.isInteger(b)) {
            const pair = [a, b].sort((x, y) => x - y);
            const key = pair.toString();

            if (!seen.has(key)) {
                result.push(pair);
                seen.add(key);
            }
        }
    }

    return result;
}

console.log(squareProduct(256)); // [ [1, 16], [2, 8], [4, 4] ]

console.log(squareProduct(n)); // [[1,16],[2,8],[4,4]]