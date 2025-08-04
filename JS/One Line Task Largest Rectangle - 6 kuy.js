/*
Task

Among all rectangles that have a perimeter of p, find the dimensions of the one whose area is the largest. Returns its height and width as [height,width].
Code Limit

Strictly less than:

    26 characters in JavaScript
    47 characters in PHP

Example

For p = 100, the output should be [25,25].

For p = 10, the output should be [2.5,2.5].

//----------------------------------------

Задача

Среди всех прямоугольников с периметром p найдите размеры прямоугольника с наибольшей площадью. 
Возвращает его высоту и ширину в формате [высота, ширина].

Ограничение по коду

Строго меньше:

26 символов в JavaScript

47 символов в PHP

Пример

Для p = 100 вывод должен быть [25,25].

Для p = 10 вывод должен быть [2.5,2.5].
*/
//coding and coding.. shorter and more shorter..  good luck! ;-)
rectanglePair=p=>[p/4,p/4]
console.log('rectanglePair=p=>[p/4,p/4]'.length)

/*  test
const Test = require('@codewars/test-compat');


describe("Basic Tests", function(){
it("It should works for basic tests.", function(){

Test.assertDeepEquals(rectanglePair(100),[25,25])
Test.assertDeepEquals(rectanglePair(10),[2.5,2.5])

})})
*/