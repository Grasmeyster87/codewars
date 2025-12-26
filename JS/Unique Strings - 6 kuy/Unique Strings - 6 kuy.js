function uniqCount(xs) {
    // Переводимо у нижній регістр
    xs = xs.toLowerCase();

    // Якщо рядок порожній — є лише одна перестановка (порожній рядок)
    if (xs.length === 0) return 1n;

    // Підрахунок частот літер
    const freq = {};
    for (let ch of xs) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Функція факторіалу з BigInt
    function factorial(n) {
        let res = 1n;
        for (let i = 2n; i <= n; i++) {
            res *= i;
        }
        return res;
    }

    // Загальний факторіал довжини рядка
    let total = factorial(BigInt(xs.length));

    // Ділимо на факторіали частот
    for (let count of Object.values(freq)) {
        total /= factorial(BigInt(count));
    }

    return total;
}

module.exports = uniqCount;
