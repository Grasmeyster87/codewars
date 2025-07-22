/*
Area of an arrow

An arrow is formed in a rectangle with sides a and 
b by joining the bottom corners to the midpoint of the top edge and the 
centre of the rectangle

a and b are integers and > 0

Write a function which returns the area of the arrow.
//---------------------------------------------------

Площадь стрелки

Стрелка образуется в прямоугольнике со сторонами a и 
b путём соединения нижних углов с серединой верхней стороны и 
центром прямоугольника.

a и b — целые числа, > 0.

Напишите функцию, возвращающую площадь стрелки.
*/
function arrowArea(a, b) {
    return (a * b) / 4;
}