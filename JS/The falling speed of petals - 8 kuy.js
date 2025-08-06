/*
When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

Notes:

    The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
    Pay attention to the data types.
    If the initial velocity is non-positive, the return value should be 0

//-----------------------------------------------------------------------

Коли навесні цвітуть японські вишні, їх називають «сакурою» і ними багато хто захоплюється. Пелюстки починають опадати наприкінці квітня.

Припустимо, що швидкість падіння пелюстки становить 5 сантиметрів за секунду (5 см/с), і пелюстці потрібно 80 секунд, щоб досягти землі з певної гілки.

Напишіть функцію, яка отримує швидкість (у см/с) пелюстки на вхід і повертає час, необхідний цій пелюстці, щоб досягти землі з тієї ж гілки.

Примітки:

Рух пелюстки досить складний, тому в цьому випадку ми можемо розглядати швидкість як константу під час її падіння.
Зверніть увагу на типи даних.
Якщо початкова швидкість недодатна, повернене значення має бути 0.
*/

function sakuraFall(v) {
  if (v <= 0) {
    return 0;
  }
  let s = 5 * 80;
    return s / +v;
}


console.log(sakuraFall(1))
console.log(sakuraFall(200))
console.log(sakuraFall(-1))