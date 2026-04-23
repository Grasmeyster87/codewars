/**
 * @param {number} lastDigit - The multiplier and the trailing digit (N)
 * @param {number} base - The number base (e.g., 8, 10, 16)
 * @returns {string} - String representation of the smallest n-parasitic number
 */
function calculateSpecial(lastDigit, base) {
    const result = [lastDigit];
    let carry = 0;
    let currentDigit = lastDigit;

    while (true) {
        // Обчислюємо добуток поточної цифри на множник + перенесення з попереднього розряду
        const product = lastDigit * currentDigit + carry;

        // Знаходимо наступну цифру та нове значення перенесення
        const nextDigit = product % base;
        carry = Math.floor(product / base);

        // Якщо наступна цифра дорівнює початковій і немає залишку - ми знайшли найменше число
        if (nextDigit === lastDigit && carry === 0) {
            break;
        }

        result.push(nextDigit);
        currentDigit = nextDigit;
    }

    // Оскільки ми збирали число з кінця, перевертаємо масив
    // і конвертуємо кожну цифру у відповідну систему счисления
    return result
        .reverse()
        .map((digit) => digit.toString(base))
        .join('');
}

module.exports = calculateSpecial;
