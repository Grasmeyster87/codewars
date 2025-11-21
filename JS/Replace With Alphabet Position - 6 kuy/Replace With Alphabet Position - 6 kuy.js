function alphabetPosition(text) {
    return text.toLowerCase()
        .split('')
        .filter(ch => ch >= 'a' && ch <= 'z') // тільки літери
        .map(ch => ch.charCodeAt(0) - 96)     // 'a' = 97 → 1
        .join(' ');

}

let string = "The sunset sets at twelve o' clock.";
console.log(alphabetPosition(string));
module.exports = alphabetPosition;