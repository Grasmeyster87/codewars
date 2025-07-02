/*
In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

Notes:

    Messages are composed of only letters and digits
    Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
    Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
    If the message is an empty string, you should return true

    //----------------------------------------------------------

    В этом ката у вас есть входная строка, и вы должны проверить, является ли она допустимым сообщением. 
    Чтобы решить это, вам нужно разделить строку на числа, а затем сравнить числа с количеством символов в следующей подстроке.

Например, "3hey5hello2hi" следует разделить на 3, hey, 5, hello, 2, hi, и функция должна вернуть true, потому что "hey" — это 3 символа, "hello" — это 5, а "hi" — это 2; поскольку числа и количество символов совпадают, результат — true.

Примечания:

Сообщения состоят только из букв и цифр
Числа могут иметь несколько цифр: например, "4code13hellocodewars" — допустимое сообщение
Каждое число должно соответствовать количеству символов в следующей подстроке, в противном случае сообщение недопустимо: например, "hello5" и "2hi2" недопустимы
Если сообщение представляет собой пустую строку, вы должны вернуть true
*/
let message = "3hey5hello2hi";

function isAValidMessage(message) {
    if (message === "") return true;
    let i = 0;
    while (i < message.length) {
        // Находим число
        let numStr = "";
        while (i < message.length && /\d/.test(message[i])) {
            numStr += message[i];
            i++;
        }

        if (numStr === "") return false; // если не нашли число — ошибка
        const num = parseInt(numStr);

        // Берём подстроку длиной num
        const text = message.slice(i, i + num);
        if (text.length !== num) return false;

        i += num; // Перемещаемся дальше
    }

    return true;
}
let res = isAValidMessage(message);
console.log(res); // null