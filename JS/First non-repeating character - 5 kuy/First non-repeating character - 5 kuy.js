function firstNonRepeatingLetter(s) {
    // Перетворюємо рядок у масив символів
    const chars = [...s];
    // Створюємо мапу для підрахунку кількості входжень (без урахування регістру)
    const counts = {};

    for (const ch of chars) {
        const lower = ch.toLowerCase();
        counts[lower] = (counts[lower] || 0) + 1;
    }

    // Шукаємо перший символ, який зустрічається лише один раз
    for (const ch of chars) {
        if (counts[ch.toLowerCase()] === 1) {
            return ch;
        }
    }

    // Якщо всі символи повторюються
    return "";
}

module.exports = firstNonRepeatingLetter;