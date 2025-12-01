function decArrowPinCode(arrowStr) {
    // Мапа цифр на координати (row, col)
    const keypad = {
        7: [0, 0],
        8: [0, 1],
        9: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        1: [2, 0],
        2: [2, 1],
        3: [2, 2],
        0: [3, 0], // <-- виправлено: 0 під 1
    };

    // Зворотна мапа координат -> цифра
    const coordToDigit = {};
    for (let d in keypad) {
        const [r, c] = keypad[d];
        coordToDigit[`${r},${c}`] = Number(d);
    }

    // Напрямки
    const moves = {
        '↑': [-1, 0],
        '↓': [1, 0],
        '←': [0, -1],
        '→': [0, 1],
    };

    // Початкова цифра
    let i = 0;
    if (!/^\d/.test(arrowStr)) return [];
    let result = [];
    let currentDigit = Number(arrowStr[i]);
    result.push(currentDigit);
    let [row, col] = keypad[currentDigit];
    i++;

    while (i < arrowStr.length) {
        if (arrowStr[i] === '*') {
            i++;
            let n = Number(arrowStr[i]);
            if (!(n > 0 && n < 10)) return [];
            // додаємо ще n повторів поточної цифри
            for (let k = 0; k < n; k++) {
                result.push(currentDigit);
            }
            i++;
        } else {
            let arrow = arrowStr[i];
            if (!(arrow in moves)) return [];
            let [dr, dc] = moves[arrow];
            row += dr;
            col += dc;
            if (coordToDigit[`${row},${col}`] === undefined) return [];
            currentDigit = coordToDigit[`${row},${col}`];
            result.push(currentDigit);
            i++;
        }
    }

    return result;
}
module.exports = decArrowPinCode;
