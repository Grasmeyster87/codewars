function isUndefined(value) {
    return typeof value == 'undefined';
}

console.log (isUndefined(undefined));
console.log (isUndefined(0));
console.log (isUndefined(null));
console.log (isUndefined(NaN));
console.log (isUndefined('undefined'));
console.log (isUndefined(''));
console.log (isUndefined({}));
console.log (isUndefined([]));

module.exports = isUndefined;