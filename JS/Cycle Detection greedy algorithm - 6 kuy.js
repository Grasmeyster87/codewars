/*
In computer science, cycle detection is the algorithmic problem of finding a cycle in a sequence of iterated function values.

For any function fff, and any initial value x0x_0x0​ in S, the sequence of iterated function values
x0,x1=f(x0),…,xi=f(xi−1),…x_0, x_1 = f(x_0), \dots ,x_i = f(x_{i-1}), \dotsx0​,x1​=f(x0​),…,xi​=f(xi−1​),…

may eventually use the same value twice under some assumptions: S finite, f periodic ... etc. So there will be some i≠ji \neq ji=j such that xi=xjx_i = x_jxi​=xj​. 
Once this happens, the sequence must continue by repeating the cycle of values from xix_i xi​ to xj−1x_{j−1}xj−1​. 
Cycle detection is the problem of finding iii and jjj, given ƒƒƒ and x0x_0x0​. Let μ\muμ be the smallest index such that the value associated 
will reappears and λ\lambdaλ the smallest value such that xμ=xλ+μx_{\mu} = x_{\lambda + \mu}xμ​=xλ+μ​, λ\lambdaλ is the loop length.

Example:

Consider the sequence:

2, 0, 6, 3, 1, 6, 3, 1, 6, 3, 1, ....

The cycle in this value sequence is 6, 3, 1. μ\muμ is 2 (first 6) λ\lambdaλ is 3 (length of the sequence or difference between position of consecutive 6).

The goal of this kata is to build a function that will return [μ\muμ,λ\lambdaλ] when given a short sequence. 
Simple loops will be sufficient. The sequence will be given in the form of an array. 
All array will be valid sequence associated with deterministic function. 
It means that the sequence will repeat itself when a value is reached a second time. 
(So you treat two cases: non repeating [1,2,3,4] and repeating [1,2,1,2], no hybrid cases like [1,2,1,4]). If there is no repetition you should return []. 

//------------------------------------

В інформатиці, виявлення циклів — це алгоритмічна задача знаходження циклу в послідовності ітерованих значень функцій.

Для будь-якої функції fff та будь-якого початкового значення x0x_0x0​ в S, послідовність ітерованих значень функцій
x0,x1=f(x0),…,xi=f(xi−1),…x_0, x_1 = f(x_0), \dots ,x_i = f(x_{i-1}), \dotsx0​,x1​=f(x0​),…,xi​=f(xi−1​),…

може зрештою використовувати одне й те саме значення двічі за певних припущень: S скінченне, f періодичне... тощо. 
Отже, буде деяке i≠ji \neq ji=j таке, що xi=xjx_i = x_jxi​=xj​. 
Як тільки це станеться, послідовність повинна продовжуватися, повторюючи цикл значень від xix_i xi​ до xj−1x_{j−1}xj−1​. 
Виявлення циклу — це задача знаходження iii та jjj, якщо задані ƒƒƒ та x0x_0x0​. Нехай μ\muμ — найменший індекс, такий, 
що відповідне значення з'явиться знову, а λ\lambdaλ — найменше значення, таке що xμ=xλ+μx_{\mu} = x_{\lambda + \mu}xμ​=xλ+μ​, λ\lambdaλ — довжина циклу.

Приклад:

Розглянемо послідовність:

2, 0, 6, 3, 1, 6, 3, 1, 6, 3, 1, ....

Цикл у цій послідовності значень — 6, 3, 1. μ\muμ дорівнює 2 (перші 6), λ\lambdaλ дорівнює 3 (довжина послідовності або різниця між позиціями послідовних 6).

Метою цього ката є створення функції, яка повертатиме [μ\muμ,λ\lambdaλ], коли задана коротка послідовність. 
Простих циклів буде достатньо. Послідовність буде задана у формі масиву. 
Усі масиви будуть коректними послідовностями, пов'язаними з детермінованою функцією. 
Це означає, що послідовність повторюватиметься, коли значення буде досягнуто вдруге. 
(Таким чином, ви розглядаєте два випадки: неповторювані [1,2,3,4] та повторювані [1,2,1,2], жодних гібридних випадків, таких як [1,2,1,4]). 
Якщо повторення немає, слід повернути [].
*/

cycle = function(sequence){
const seen = new Map();

  for (let i = 0; i < sequence.length; i++) {
    const value = sequence[i];
    if (seen.has(value)) {
      const mu = seen.get(value);       // перше входження значення
      const lambda = i - mu;            // відстань між повтореннями
      return [mu, lambda];
    }
    seen.set(value, i);
  }

  return []; // якщо немає повторень
}


/* Test
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(cycle([2,3,4,2,3,4]), [0,3])
Test.assertSimilar(cycle([1,2,3,4]), [])
  });
});
*/