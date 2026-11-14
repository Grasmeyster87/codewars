function solve(str) {
    let mismatches = 0;

    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            mismatches++;
            if (mismatches > 1) return false; // можно выйти рано
        }
    }

    if (mismatches === 0) {
        // Уже палиндром: можно ли поменять ровно 1 символ и остаться палиндромом?
        // Да, только если есть "свободный" средний символ (нечётная длина).
        return str.length % 2 !== 0;
    }

    return mismatches === 1;
}

module.exports = solve;