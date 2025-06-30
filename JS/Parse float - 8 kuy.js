
/*
Write function parseF which takes an input and returns 
a number or null if conversion is not possible. 
The input can be one of many different types so be aware.

//-----------------------------------------------------

Напишите функцию parseF, 
которая принимает входные данные и возвращает число или null, 
если преобразование невозможно. 
Входные данные могут быть одного из многих различных типов, 
поэтому будьте внимательны.

*/

function parseF(s) {
    const num = parseFloat(input);
    return isNaN(num) ? null : num;
}