/*
   JS Golfing Series  

Task:

Return the summation of the input strings with no more than 14 characters.
//----------------------
Серия JS Golfing

Задача:

Вернуть сумму входных строк, содержащих не более 14 символов.
*/

x=(a,b)=>a- -b

console.log("x=(a,b)=>+a+ +b".length) // 15
console.log("x=(+a,+b)=>a+b".length) // 14 не працює

console.log(x('10','20')); // 30