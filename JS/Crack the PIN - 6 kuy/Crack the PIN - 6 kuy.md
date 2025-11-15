Given is a md5 hash of a five digits long PIN. It is given as string. Md5 is a function to hash your password: "password123" ===> "482c811da5d5b4bc6d497ffa98491e38"

Why is this useful? Hash functions like md5 can create a hash from string in a short time and it is impossible to find out the password, if you only got the hash. The only way is cracking it, means try every combination, hash it and compare it with the hash you want to crack. (There are also other ways of attacking md5 but that's another story) Every Website and OS is storing their passwords as hashes, so if a hacker gets access to the database, he can do nothing, as long the password is safe enough.

[What is a hash?](https://en.wikipedia.org/wiki/Hash_function#:~:text=A%20hash%20function%20is%20any,table%20called%20a%20hash%20table.)

[What is md5?](https://en.wikipedia.org/wiki/MD5)

Note: Many languages have build in tools to hash md5. If not, you can write your own md5 function or google for an example.

[Here](https://www.codewars.com/kata/password-hashes) is another kata on generating md5 hashes!

Your task is to return the cracked PIN as string.

This is a little fun kata, to show you, how weak PINs are and how important a bruteforce protection is, if you create your own login.

If you liked this kata, here is an extension with short passwords!

Some of my other katas:
- [Error Correction #1 - Hamming Code](https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e),
- [Hack the NSA](https://www.codewars.com/kata/5f0795c6e45bc600247ab794),
- [Decode the QR-Code](https://www.codewars.com/kata/5ef9c85dc41b4e000f9a645f),

Дан md5-хеш пятизначного PIN-кода. Он представлен в виде строки. MD5 — это функция для хеширования вашего пароля: "password123" ===> "482c811da5d5b4bc6d497ffa98491e38".

Чем это полезно? Хэш-функции, такие как md5, могут создать хеш из строки за короткое время, и узнать пароль, зная только хеш, невозможно. Единственный способ — это его взломать, то есть перебрать все комбинации, хешировать и сравнить с нужным хешем. (Существуют и другие способы атаки на md5, но это уже другая история). Каждый веб-сайт и операционная система хранят свои пароли в виде хеш-кодов, поэтому, если хакер получит доступ к базе данных, он ничего не сможет сделать, пока пароль достаточно безопасен.

Что такое хеш?

Что такое md5?

Примечание: Во многих языках программирования есть встроенные инструменты для хеширования md5. Если нет, вы можете написать свою собственную функцию md5 или поискать пример в Google.

Вот ещё один урок по генерации md5-хешей!

Ваша задача — вернуть взломанный PIN-код в виде строки.

Это небольшой урок, который покажет вам, насколько слабы PIN-коды и насколько важна защита от перебора, если вы создаёте свой логин.

Если вам понравился этот урок, вот расширение с короткими паролями!

Ещё несколько моих уроков:
Исправление ошибок №1 — Код Хэмминга
Взлом АНБ
Расшифровка QR-кода


<br><br>
Для решения этой задачи нужно перебрать все возможные пятизначные PIN-коды (от `00000` до `99999`) и проверить, совпадает ли MD5-хеш каждого из них с заданным хешем.

### Основные моменты:
1. **PIN-код — пятизначное число**, то есть от `00000` до `99999`.
2. Нужно сгенерировать хеш для каждого из этих значений и сравнить его с целевым хешем.
3. В задаче указано, что **нельзя использовать `console.log`**, так как это замедляет выполнение.
4. В коде есть пример: `hash1 = '827ccb0eea8a706c4c34a16891f84e7b'` соответствует PIN `12345`.

### Решение на JavaScript:

```javascript
const crypto = require('crypto');

function crack(hash) {
    for (let i = 0; i <= 99999; i++) {
        const pin = i.toString().padStart(5, '0'); // Преобразуем число в строку длиной 5 символов
        const hashed = crypto.createHash('md5').update(pin).digest('hex');
        if (hashed === hash) {
            return pin;
        }
    }
    return null; // Если не нашли
}

module.exports = crack;
```

### Как работает:
- `padStart(5, '0')` — добавляет ведущие нули, чтобы число было длиной 5 символов (например, `5` → `00005`).
- `crypto.createHash('md5')` — создает MD5-хеш.
- Сравниваем хеш с целевым.

### Пример использования:
```javascript
let hash1 = '827ccb0eea8a706c4c34a16891f84e7b';
let pincode = crack(hash1);
console.log(pincode); // Выведет: 12345
```

### Тесты:
Тесты проверяют, что функция возвращает правильный PIN-код для заданного хеша.

---

Если ты хочешь, я могу также написать решение на Python или другом языке.