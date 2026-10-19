function solve(n) {
    // input and output are BigInts
    // The sum of the last row of an n-row triangle is the n-th Catalan number.
    // Recurrence: C(k+1) = C(k) * 2 * (2k + 1) / (k + 2); the division is always exact.
    let c = 1n;
    for (let k = 0n; k < n; k++) {
        c = (c * 2n * (2n * k + 1n)) / (k + 2n);
    }
    return c;
}


module.exports = solve;