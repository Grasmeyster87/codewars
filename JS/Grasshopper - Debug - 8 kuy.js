/*
Debug celsius converter

Your friend is traveling abroad to the United States so he wrote a program 
to convert fahrenheit to celsius. Unfortunately his code has some bugs.

Find the errors in the code to get the celsius converter working properly.

To convert fahrenheit to celsius:

celsius = (fahrenheit - 32) * (5/9)

Remember that typically temperatures in the current weather conditions are given in whole numbers. 
It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. 
Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.
//---------------------------------------------------------
Отладка конвертера градусов Цельсия

Ваш друг путешествует в США и написал программу для перевода градусов Фаренгейта в градусы Цельсия. К сожалению, в его коде есть ошибки.

Найдите ошибки в коде, чтобы конвертер градусов Цельсия работал правильно.

Чтобы перевести градусы Фаренгейта в градусы Цельсия:

градус Цельсия = (градус Фаренгейта - 32) * (5/9)

Помните, что обычно температура в текущих погодных условиях указывается целыми числами. 
Датчики температуры могут показывать температуру с более высокой точностью, например, до десятых долей. 
Однако погрешность прибора делает такую ​​точность ненадёжной для многих типов датчиков температуры.
*/


function weatherInfo(temp) {
    var c = convertToCelsius(temp);
    if (c < 0)
        return (c + " is freezing temperature");
    else
        return (c + " is above freezing temperature");
}

function convertToCelsius(temperature) {
    var celsius = (temperature - 32) * (5 / 9);
    return celsius;
}

console.log(weatherInfo(50))
/* test
const { assert } = require('chai');

describe ('celsius converter', function () {
  it ('should get correct answer', function () {
    assert.strictEqual(weatherInfo(50), '10 is above freezing temperature')
    assert.strictEqual(weatherInfo(23),  '-5 is freezing temperature')
 })
})
*/