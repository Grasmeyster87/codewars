/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
Examples

"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
//-------------------------------------------

Вес каждого восклицательного знака равен 2; вес каждого вопросительного знака — 3. 
Если положить на весы две нити, левую и правую, — будут ли они сбалансированы?

Если левая сторона тяжелее, вернуть «Left»; если правая сторона тяжелее, вернуть «Right»; 
если они сбалансированы, вернуть «Balance».
Примеры

"!!", "??" --> "Right"
"!??", "?!!" --> "Left"
"!?!!", "?!?" --> "Left"
"!!???!????", "??!!?!!!!!!!" --> "Balance"
*/
let left = "!!???!????";
let right = "!!?!!!!!!!";

function balance(left, right) {
    let weight_left = left.split("").reduce((acc, val) => acc + (val == '!' ? 2 : 3), 0);
    let weight_right = right.split("").reduce((acc, val) => acc + (val == '!' ? 2 : 3), 0);
    if (weight_left > weight_right) return 'Left';
    if (weight_left < weight_right) return 'Right';
    return 'Balance';
};

console.log(balance(left, right));