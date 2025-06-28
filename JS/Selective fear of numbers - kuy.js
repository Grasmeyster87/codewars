/*
I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)


У меня сумасшедшее психическое заболевание. Я очень не люблю числа. Но это немного сложно: 
число, которого я боюсь, зависит от того, какой сегодня день недели... Вот конкретное описание моего психического заболевания:

Понедельник --> 12

Вторник --> числа больше 95

Среда --> 34

Четверг --> 0

Пятница --> числа, делящиеся на 2

Суббота --> 56

Воскресенье --> 666 или -666

Напишите функцию, которая принимает строку (день недели) и целое число (число для проверки), 
чтобы она сообщала врачу, боюсь я или нет. (возвращает логическое значение)
*/

var AmIAfraid = function (day, num) {
    //Help me...
    switch (day) {
        case "Monday":
            return num === 12;
        case "Tuesday":
            return num > 95;
        case "Wednesday":
            return num === 34;
        case "Thursday":
            return num === 0;
        case "Friday":
            return num % 2 === 0;
        case "Saturday":
            return num === 56;
        case "Sunday":
            return num === 666 || num === -666;
        default:
            return false; // Добавлено для случаев, если день не распознан
    }
};

var AmIAfraid = function (day, num) {
    const conditions = {
        "Monday": num === 12,
        "Tuesday": num > 95,
        "Wednesday": num === 34,
        "Thursday": num === 0,
        "Friday": num % 2 === 0,
        "Saturday": num === 56,
        "Sunday": num === 666 || num === -666
    };

    return conditions[day];
};