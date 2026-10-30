function remember(str) {
    const seen = new Set();
    const repeats = new Set();
    const res = [];

    for (const char of str) {
        if (seen.has(char)) {
            if (!repeats.has(char)) {
                res.push(char);
                repeats.add(char);
            }
        } else {
            seen.add(char);
        }
    }
    return res;
}
console.log(remember('limbojackassin the garden'), [
    'a',
    's',
    'i',
    ' ',
    'e',
    'n',
]);
console.log('\n', remember('apPle'), []);
module.exports = remember;
