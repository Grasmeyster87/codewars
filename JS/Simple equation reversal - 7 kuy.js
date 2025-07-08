/*
Given a mathematical equation that has *,+,-,/, reverse it as follows:

solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"

More examples in test cases.

Good luck!

Please also try:

Simple time difference

Simple remove duplicates

//-----------------------------------
Дано математичне рівняння, яке містить *,+,-,/, у зворотному порядку:

solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"

Більше прикладів у тестових випадках.

Удачі!

Спробуйте також:

Проста різниця в часі

Просте видалення дублікатів
*/
function solve(eq) {
    const parts = eq.match(/[\w]+|[+\-*/]/g); 
    return parts.reverse().join('');
}

let res = solve("100*b/y");

console.log(res); // "y/b*100"