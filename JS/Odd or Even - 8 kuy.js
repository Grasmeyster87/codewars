/*
Task:

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
Examples:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

Have fun!
Fundame

//-------------------------------------

Задание:

Дан список целых чисел, определите, является ли сумма его элементов чётной или нечётной.

В ответе укажите строку, соответствующую «odd» или «even».

Если входной массив пуст, считайте его: [0] (массив с нулем).

Примеры:

Входные данные: [0]
Выходные данные: "even"

Входные данные: [0, 1, 4]
Выходные данные: «odd»

Входные данные: [0, -1, -5]
Выходные данные: «even»

Удачи!

Основы
*/

function oddOrEven(array) {
    if (array.length == 0)  {return 'odd'}
    let res = array.reduce((acc, el) => {return acc = acc + el}, 0);
    return  res % 2 == 0 ? 'even' : 'odd';
}

console.log(oddOrEven([0]))
console.log(oddOrEven([0, 1, 4]))
console.log(oddOrEven([0, -1, -5]))