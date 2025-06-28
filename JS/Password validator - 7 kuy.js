/*
Description

Your job is to write a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:

    There needs to be at least 1 uppercase letter.
    There needs to be at least 1 lowercase letter.
    There needs to be at least 1 number.
    The password needs to be at least 8 characters long.

Your function takes a string argument and returns whether it is a valid password, as a boolean.
Examples:

"Abcd1234" ===> true
"Abcd123" ===> false
"abcd1234" ===> false
"AbcdefGhijKlmnopQRsTuvwxyZ1234567890" ===> true
"ABCD1234" ===> false
"Ab1!@#$%^&*()-_+={}[]|\:;?/>.<," ===> true;
"!@#$%^&*()-_+={}[]|\:;?/>.<," ===> false;
//-------------------------------------------------------------------------------------

Описание

Ваша задача — написать простую функцию проверки пароля, как на многих веб-сайтах.

Правила для допустимого пароля следующие:

Должна быть как минимум 1 заглавная буква.
Должна быть как минимум 1 строчная буква.
Должна быть как минимум 1 цифра.
Длина пароля должна быть не менее 8 символов.

Ваша функция принимает строковый аргумент и возвращает, является ли он допустимым паролем, в виде логического значения.
Примеры:
"Abcd1234" ===> true
"Abcd123" ===> false
"abcd1234" ===> false
"AbcdefGhijKlmnopQRsTuvwxyZ1234567890" ===> true
"ABCD1234" ===> false
"Ab1!@#$%^&*()-_+={}[]|\:;?/>.<," ===> true;
"!@#$%^&*()-_+={}[]|\:;?/>.<," ===> false;
*/



function password(str) {
    //validate password
    // Проверка длины пароля
    if (str.length < 8) {
        return false;
    }
    
    // Регулярное выражение для проверки наличия заглавной буквы, строчной буквы и цифры
    const hasUpperCase = /[A-Z]/.test(str);
    const hasLowerCase = /[a-z]/.test(str);
    const hasDigit = /\d/.test(str);
    
    // Возвращаем результат проверки всех условий
    return hasUpperCase && hasLowerCase && hasDigit;
}