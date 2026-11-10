function validParentheses(parenStr) {
    let count = 0;

    // Перевірка на порожній рядок
    if (parenStr.length === 0) return true;

    for (let i = 0; i < parenStr.length; i++) {
        if (parenStr[i] === '(') {
            count++;
        } else {
            count--;
        }

        // Якщо в будь-який момент закриваючих дужок стало більше, ніж відкриваючих
        if (count < 0) {
            return false;
        }
    }

    // В кінці кількість відкритих і закритих має бути однаковою
    return count === 0;
}
module.exports = validParentheses;