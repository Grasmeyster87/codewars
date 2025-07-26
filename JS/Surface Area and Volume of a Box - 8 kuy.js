/*
Write a function that returns the total surface area and volume of a box.

The given input will be three positive non-zero integers: width, height, and depth.

The output will be language dependant, so please check sample tests for 
the corresponding data type, (list, tuple, struct, query, etcetera).
//------------------------------

Напишите функцию, которая возвращает общую площадь поверхности и объём параллелепипеда.

Входные данные: три положительных целых числа, отличных от нуля: ширина, высота и глубина.

Выходные данные зависят от языка, поэтому, пожалуйста, 
проверьте примеры тестов для соответствующего типа данных (список, кортеж, структура, запрос и т. д.).

*/

function getSize(width, height, depth) {
    const volume = width * height * depth;
    const surfaceArea = 2 * (width * height + height * depth + width * depth);
    return [surfaceArea, volume];
}

console.log(getSize(4, 2, 6));