let number = 35235235;

function groupByCommas(n) {
    return n
        .toString()
        .split('')
        .reverse()
        .map((digit, i) => (i % 3 === 0 && i !== 0 ? digit + ',' : digit))
        .reverse()
        .join('');
}

let res = groupByCommas(number);
console.log(res);

module.exports = groupByCommas;