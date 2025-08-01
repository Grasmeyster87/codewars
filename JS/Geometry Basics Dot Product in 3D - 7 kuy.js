/*
This series of katas will introduce you to basics of doing geometry with computers.

Vector objects have x, y, and z attributes.

Write a function calculating dot product of Vector a and Vector b.

You can read more about dot product on Wikipedia.

Tests round answers to 6 decimal places.
//---------------------------------------

Эта серия ката познакомит вас с основами компьютерной геометрии.

Векторные объекты имеют атрибуты x, y и z.

Напишите функцию, вычисляющую скалярное произведение векторов a и b.

Подробнее о скалярном произведении можно прочитать в Википедии.

В тестах ответы округляются до 6 знаков после запятой.

*/
function dotProduct(v1, v2) {
  return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z
}

console.log(dotProduct(new Vector(2,0,-1), new Vector(0,-2,1))) // -1