let sequence = [0, 1, 2, 3, 4];

function getFunction(sequence) {
    const diffs = [];
    for (let i = 1; i < sequence.length; i++) {
        diffs.push(sequence[i] - sequence[i - 1]);
    }

    const isLinear = diffs.every(d => d === diffs[0]);
    if (!isLinear) return "Non-linear sequence";

    const a = diffs[0];
    const b = sequence[0];

    let result = "f(x) = ";

    if (a === 0) {
        result += `${b}`;
    } else {
        result += `${a === 1 ? "" : a === -1 ? "-" : a}x`;
        if (b !== 0) {
            result += b > 0 ? ` + ${b}` : ` - ${Math.abs(b)}`;
        }
    }

    return result;
}

let res = getFunction(sequence);
console.log(res);

module.exports = getFunction;