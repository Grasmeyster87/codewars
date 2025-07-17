/*

Task

Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.
Examples

"Hi!" --> "Hi"
"Hi!!!" --> "Hi"
"!Hi" --> "!Hi"
"!Hi!" --> "!Hi"
"Hi! Hi!" --> "Hi Hi"
"!!!Hi !!hi!!! !hi" --> "!!!Hi !!hi !hi"

//--------------------------------------
Уберите все восклицательные знаки в конце слов. Слова разделяются одним пробелом. Внутри слова восклицательные знаки не допускаются.
Примеры

"Привет!" --> "Привет"
"Привет!!!" --> "Привет"
"!Привет" --> "!Привет"
"!Привет!" --> "!Привет"
"Привет! Привет!" --> "Привет Привет"
"!!!Привет !!привет!!! !привет" --> "!!!Привет !!привет !привет"

*/

/*
function remove(s){
  return s.replace(/\b!+/g, '');  
}
*/

function remove(s) {
    return s
        .split(" ")
        .map(word => word.replace(/!+$/, ""))
        .join(" ");
}

const str1 = "Hi!!!";

console.log(remove(str1));