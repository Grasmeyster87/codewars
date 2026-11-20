function partsSums(ls) {
    const result = new Array(ls.length + 1);
    let sum = 0;

    result[ls.length] = 0;

    for (let i = ls.length - 1; i >= 0; i--) {
        sum += ls[i];
        result[i] = sum;
    }

    return result;
}
/*
function partsSums(ls) {
    ls.unshift(0);
    let sum = ls.reduce((p, c) => p + c, 0);
    return ls.map(v => sum = sum - v);
}
let ls = [0, 1, 3, 6, 10]; // [20, 20, 19, 16, 10, 0]
console.log(partsSums(ls));
*/

module.exports = partsSums;