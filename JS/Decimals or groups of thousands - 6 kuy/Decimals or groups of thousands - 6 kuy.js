function sumUpNumbers(arr) {
    const parseNum = (s) => {
        s = s.trim();
        const lastDot = s.lastIndexOf('.');
        const lastComma = s.lastIndexOf(',');

        // Якщо є і крапка і кома — правіший знак це десяткова частина
        if (lastDot !== -1 && lastComma !== -1) {
            if (lastDot > lastComma) {
                // крапка справа -> десяткова точка (US) => видаляємо коми
                return parseFloat(s.replace(/,/g, ''));
            } else {
                // кома справа -> десяткова кома (EU) => видаляємо крапки, замінюємо кому на крапку
                return parseFloat(s.replace(/\./g, '').replace(',', '.'));
            }
        }

        // Лише кома присутня
        if (lastComma !== -1) {
            const decLen = s.length - lastComma - 1;
            if (decLen <= 2) {
                // кома — десяткова
                return parseFloat(s.replace(/\./g, '').replace(',', '.'));
            } else {
                // кома — розділювач тисяч
                return parseFloat(s.replace(/,/g, ''));
            }
        }

        // Лише крапка присутня
        if (lastDot !== -1) {
            const decLen = s.length - lastDot - 1;
            if (decLen <= 2) {
                // крапка — десяткова
                return parseFloat(s.replace(/,/g, ''));
            } else {
                // крапка — розділювач тисяч (EU style)
                return parseFloat(s.replace(/\./g, ''));
            }
        }

        // Жодних роздільників
        return parseFloat(s);
    };

    const sum = arr.reduce((acc, x) => acc + parseNum(x), 0);

    // Формат: коми для тисяч, точка — десяткова; дві цифри після десяткової
    const fixed = sum.toFixed(2); // рядок з двома знаками після крапки
    // Вставляємо коми для розділення тисяч (у частину ліворуч від крапки)
    const parts = fixed.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}

module.exports = sumUpNumbers;
