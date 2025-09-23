/*
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9

Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

Вам даны длина и ширина четырёхстороннего многоугольника. Многоугольник может быть прямоугольником или квадратом.
Если это квадрат, верните его площадь. Если это прямоугольник, верните его периметр.

Пример (Вход1, Вход2 -> Выход):

6, 10 -> 32
3, 3 -> 9

Примечание: в рамках этого ката предполагается, что это квадрат, если его длина и ширина равны, в противном случае это прямоугольник.
*/

const areaOrPerimeter = function(l , w) {
    return l == w ? l * l : (l + w) * 2;
};

console.log (areaOrPerimeter(3,  3)) //  9
console.log (areaOrPerimeter(6, 10)) // 32