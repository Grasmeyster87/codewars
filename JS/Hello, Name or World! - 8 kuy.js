/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"

//------------------------------------------------
Определите метод hello, который возвращает "Hello, Name!" для указанного имени или говорит Hello, World!, если имя не указано (или передано как пустая строка).

Предположим, что имя — это строка, и он проверяет опечатки пользователя, чтобы вернуть имя с первой заглавной буквой (Xxxx).

Примеры:

* С `name` = "john" => return "Hello, John!"
* С `name` = "aliCE" => return "Hello, Alice!"
* С `name` не указано
или `name` = "" => return "Hello, World!"
*/

function hello(name) {
    if (name === undefined || name === '') {
        return 'Hello, World!';
    }
    
    // Приводим первую букву к заглавной, остальные к строчным
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    
    return `Hello, ${formattedName}!`;  
}