/*
Lyrics...

Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, 
you can mess with pyramids even if you are not in Egypt at the time. For example, 
let's consider the following problem: imagine that you have a pyramid built of numbers, like the ones here:

    3                10
   7 4             10  20
  2 4 6          10  10  20
 8 5 9 3       10  90  10  20

Here comes the task...

Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. 
As you can see, the largest 'slide downs' are 3 + 7 + 4 + 9 = 23, and 10 + 20 + 10 + 90 = 130.

Your task is to write a function that takes a pyramid representation as an argument and returns its largest 'slide down'. For example:

    With the input [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]], your function should return 23.
    With the input [[10], [10, 20], [10, 10, 20], [10, 90, 10, 20]], your function should return 130.

By the way...

Tests include some extraordinarily high pyramids so as you can guess, brute-force method 
is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

(c) This task is a lyrical version of Problem 18 and/or Problem 67 on ProjectEuler.


//-----------------------------------------------------------------------------------

Текст песни...

Пирамиды удивительны! И в архитектурном, и в математическом смысле. 
Если у вас есть компьютер, вы можете возиться с пирамидами, даже если вы в это время не в Египте. 
Например, давайте рассмотрим следующую задачу: представьте, что у вас есть пирамида, построенная из чисел, как здесь:

    3                10
   7 4             10  20
  2 4 6          10  10  20
 8 5 9 3       10  90  10  20

Вот и задача...

Допустим, что «скольжение вниз» — это максимальная сумма последовательных чисел от вершины до основания пирамиды. 
Как вы можете видеть, самые большие «сползания» — это 3 + 7 + 4 + 9 = 23 и 10 + 20 + 10 + 90 = 130.

Ваша задача — написать функцию, которая принимает представление пирамиды в качестве аргумента и возвращает свой самый большой «сползания». Например:

При вводе [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]] ваша функция должна вернуть 23.
При вводе [[10], [10, 20], [10, 10, 20], [10, 90, 10, 20]] ваша функция должна вернуть 130.

Кстати...

Тесты включают в себя некоторые необычайно высокие пирамиды, поэтому, как вы можете догадаться, метод грубой силы — плохая идея, 
если у вас нет нескольких столетий, которые можно потратить впустую. Вы должны придумать что-то более умное, чем это.

(c) Это задание представляет собой лирическую версию задачи 18 и/или задачи 67 из ProjectEuler.
*/

const pyramid = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]; // Example input
function longestSlideDown(pyramid) {
      // Start from the second last row and move upwards
    for (let i = pyramid.length - 2; i >= 0; i--) {
        for (let j = 0; j < pyramid[i].length; j++) {
            // Update each element to be the maximum sum possible by choosing either the left or right child
            pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
        }
    }
    return pyramid[0][0];
};

console.log(longestSlideDown(pyramid)); // Output: 23