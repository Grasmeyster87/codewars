/*
Task

Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).
Notes

Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.
Example

leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
//-----------------------------------------

Задача

Дан массив чисел и индекс. Верните либо индекс наименьшего числа, большего элемента с указанным индексом, либо -1, если такого индекса нет (или, где применимо, Nothing или аналогичное пустое значение).

Примечания

Возможны несколько правильных ответов. В этом случае верните любой из них.
Заданный индекс будет находиться внутри заданного массива.
Следовательно, заданный массив никогда не будет пустым.
Пример

leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
*/

function leastLarger(arr, index) {
    const target = arr[index];
    let minLarger = Infinity;
    let resultIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > target && arr[i] < minLarger) {
            minLarger = arr[i];
            resultIndex = i;
        }
    }

    return resultIndex;
}
