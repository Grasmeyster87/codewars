/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Triangle objects have attributes a, b, 
c describing their corners, each of them is a Point.

Write a function calculating area of a Triangle defined this way.

//----------------------------------------------------

Эта серия ката познакомит вас с основами компьютерной геометрии.

Точечные объекты имеют атрибуты x и y. Треугольные объекты имеют атрибуты a, b и c,
описывающие их углы, каждый из которых является точкой.

Напишите функцию, вычисляющую площадь треугольника, заданного таким образом.
*/

function triangleArea(triangle) {
  const { a, b, c } = triangle;
    
    // Extracting coordinates from points
    const x1 = a.x, y1 = a.y;
    const x2 = b.x, y2 = b.y;
    const x3 = c.x, y3 = c.y;

    // Applying the Shoelace formula
    const area = 0.5 * Math.abs(
        x1 * (y2 - y3) +
        x2 * (y3 - y1) +
        x3 * (y1 - y2)
    );

    return area;
}

/*
describe( "random tests", function() {
    const { assert } = require('chai');

    function doTest(triangle, expected) {
        const message = `triangle = ${JSON.stringify(triangle)}\n\n`;
        const actual = triangleArea(triangle);
        assert.approximately(actual, expected, 1e-6, message); 
    }

    it( "sample tests", function() {
        doTest(new Triangle(
            new Point(10, 10), new Point(40, 10), new Point(10, 50)
        ), 600);
        doTest(new Triangle(
            new Point(15, -10), new Point(40, 20), new Point(20, 50)
        ), 675);
    });
});
*/
