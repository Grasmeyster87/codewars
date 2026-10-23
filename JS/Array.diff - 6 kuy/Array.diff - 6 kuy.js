/*
function arrayDiff(a, b) {
    for (let i = a.length - 1; i >= 0; i--) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                a.splice(i, 1); // Удаляем 1 элемент по индексу i
                break; // Выходим из внутреннего цикла, так как элемент уже удален
            }
        }
    }
    return a;
}
*/

function arrayDiff(a, b) {
    return a.filter((element) => !b.includes(element));
}
const a = [1, 2, 3];
const b = [3];
let promRes = arrayDiff(a, b);

console.log(promRes);

module.exports = arrayDiff;
