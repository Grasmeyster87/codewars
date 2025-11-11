function solve(str) {
    // Регулярное выражение для поиска числа и группы в скобках
    const regex = /(\d*)\(([^()]*)\)/;
    
    // Пока есть скобки в строке
    while (str.includes('(')) {
        str = str.replace(regex, (match, mult, inner) => {
            // Рекурсивно обрабатываем внутреннюю группу
            const expanded = solve(inner);
            // Умножаем результат на множитель (или 1, если множитель отсутствует)
            return expanded.repeat(parseInt(mult) || 1);
        });
    }
    
    return str;
}

module.exports = solve;