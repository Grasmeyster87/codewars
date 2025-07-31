/*
Write the following function:

function areaOfPolygonInsideCircle(circleRadius, numberOfSides)

It should calculate the area of a regular polygon of numberOfSides, number-of-sides, or number_of_sides sides inside a circle of radius circleRadius, circle-radius, or circle_radius which passes through all the vertices of the polygon (such circle is called circumscribed circle or circumcircle).

The answer should be a number rounded to 3 decimal places.

Input :: Output Examples

areaOfPolygonInsideCircle(3, 3) // returns 11.691

areaOfPolygonInsideCircle(5.8, 7) // returns 92.053

areaOfPolygonInsideCircle(4, 5) // returns 38.042

Note: if you need to use Pi in your code, use the native value of your language unless stated otherwise.
//--------------------------------------

Напишите следующую функцию:

function areaOfPolygonInsideCircle(circleRadius, numberOfSides)

Она должна вычислять площадь правильного многоугольника с числом сторон, 
числом сторон или числом сторон внутри окружности радиусом circleRadius, радиусом circle или радиусом circle_radius, 
проходящей через все вершины многоугольника (такая окружность называется описанной окружностью).

Ответ должен быть представлен числом, округлённым до трёх знаков после запятой.

Ввод :: Примеры вывода

areaOfPolygonInsideCircle(3, 3) // возвращает 11,691

areaOfPolygonInsideCircle(5,8, 7) // возвращает 92,053

areaOfPolygonInsideCircle(4, 5) // возвращает 38,042

Примечание: если вам нужно использовать число Пи в коде, используйте значение, 
соответствующее вашему языку программирования, если не указано иное.
*/

function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  const angle = (2 * Math.PI) / numberOfSides;
  const area = (numberOfSides * circleRadius * circleRadius * Math.sin(angle)) / 2;
  return area;
}