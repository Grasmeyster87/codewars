/*
Create a factory function genfib that returns a function fib that always returns the next Fibonacci number on each invocation ( it should return 0 when being called the first time ).

Example:

const fib = genfib();
fib(); // returns 0
fib(); // returns 1
fib(); // returns 1
fib(); // returns 2

//----------------------------------------------

Создайте фабричную функцию genfib, которая возвращает функцию fib, которая всегда возвращает следующее число Фибоначчи при каждом вызове (при первом вызове она должна возвращать 0).

Пример:

const fib = genfib();
fib(); // возвращает 0
fib(); // возвращает 1
fib(); // возвращает 1
fib(); // возвращает 2
*/

function genfib() {
   let a = 0, b = 1;

  return function fib() {
    const current = a;
    [a, b] = [b, a + b]; // обновление значений для следующего вызова
    return current;
  };

}