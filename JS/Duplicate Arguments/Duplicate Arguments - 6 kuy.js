/*
Complete the solution so that it returns true if it contains any duplicate argument values, 
and false otherwise. Any number of arguments may be passed into the function.

The arguments passed in will only be strings or numbers.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true

//-------------------------------------

Дополните решение так, чтобы оно возвращало значение true, 
если содержит повторяющиеся значения аргументов, и false в противном случае. 
В функцию можно передать любое количество аргументов.

Передаваемые аргументы могут быть только строками или числами.

Примеры:

solution(1, 2, 3) --> false
solution(1, 2, 3, 2) --> true
solution('1', '2', '3', '2') --> true
*/

function solution(...args) {
  const seen = new Set();
  for (const value of args) {
    if (seen.has(value)) {
      return true;
    }
    seen.add(value);
  }
  return false;
}

//const solution = (...args) => new Set(args).size !== args.length;

console.log(solution('a', 'b', 'c', 'a'))
module.exports = solution;