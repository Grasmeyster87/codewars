/*
Bob needs a fast way to calculate the volume of a rectangular cuboid with three values: the length, width and height of the cuboid.

Write a function to help Bob with this calculation.
//------------------------------------------------------

Бобу нужен быстрый способ вычисления объема прямоугольного кубоида с тремя значениями: длиной, шириной и высотой кубоида.

Напишите функцию, которая поможет Бобу с этим вычислением.
*/

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        // your code here
        return length * width * height;
    }
}
console.log(Kata.getVolumeOfCuboid(2, 2, 2));