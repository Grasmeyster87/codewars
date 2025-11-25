function solution(string) {
    return string
        .split('')
        .map((el) => {
            // если буква заглавная — добавляем пробел перед ней
            if (el === el.toUpperCase() && el.match(/[A-Z]/)) {
                return ' ' + el;
            }
            return el;
        })
        .join('');
}
let text = 'camelCasing';
let res = solution(text);
console.log(res);
module.exports = solution;
