/*
Task

The longest diagonals of a square matrix are defined as follows:

the first longest diagonal goes from the top left corner to the bottom right one;
the second longest diagonal goes from the top right corner to the bottom left one.

Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.
Example

For

matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

the output should be

[[3, 2, 1],
 [4, 5, 6],
 [9, 8, 7]]

Input/Output

    [input] 2D integer array matrix

    Constraints: 1 ≤ matrix.length ≤ 10, matrix.length = matrix[i].length, 1 ≤ matrix[i][j] ≤ 1000.

    [output] 2D integer array

    Matrix with swapped diagonals.
//-----------------------------------------------------------------------------------------

721 / 5 000
Задание

Длинные диагонали квадратной матрицы определяются следующим образом:

первая диагональ идёт из левого верхнего угла в правый нижний;

вторая диагональ идёт из правого верхнего угла в левый нижний.

Дана квадратная матрица. Ваша задача — поменять местами её длинные диагонали, поменяв местами элементы в соответствующих позициях.

Пример

Для

матрица = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

выход должен быть:

[[3, 2, 1],
[4, 5, 6],
[9, 8, 7]]

Вход/выход

[вход] Двумерный массив целых чисел matrix

Ограничения: 1 ≤ matrix.length ≤ 10, matrix.length = matrix[i].length, 1 ≤ matrix[i][j] ≤ 1000.

[выход] Двумерный массив целых чисел

Матрица с переставленными диагоналями.
Zadaniye

Dlinnyye diagonali kvadratnoy matritsy opredelyayutsya sleduyushchim obrazom:

pervaya diagonal' idot iz levogo verkhnego ugla v pravyy nizhniy;

vtoraya diagonal' idot iz pravogo verkhnego ugla v levyy nizhniy.

Dana kvadratnaya matritsa. Vasha zadacha — pomenyat' mestami yeyo dlinnyye diagonali, pomenyav mestami elementy v sootvetstvuyushchikh pozitsiyakh.

Primer

Dlya

matritsa = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

vykhod dolzhen byt':

[[3, 2, 1],
[4, 5, 6],
[9, 8, 7]]

Vkhod/vykhod

[vkhod] Dvumernyy massiv tselykh chisel matrix

Ogranicheniya: 1 ≤ matrix.length ≤ 10, matrix.length = matrix[i].length, 1 ≤ matrix[i][j] ≤ 1000.

[vykhod] Dvumernyy massiv tselykh chisel

Matritsa s perestavlennymi diagonalyami.
Ещё
Отправить отзыв

*/

let matritsa = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function swapDiagonals(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        // Меняем местами элементы главной и побочной диагонали
        let temp = matrix[i][i];
        matrix[i][i] = matrix[i][n - 1 - i];
        matrix[i][n - 1 - i] = temp;
    }

    return matrix;

};

console.log(swapDiagonals(matritsa));