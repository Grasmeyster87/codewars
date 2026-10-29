function findAdditiveNumbers(num) {
    const n = num.length;

    // Перебираємо всі можливі довжини першого числа (i)
    for (let i = 1; i < n; i++) {
        const s1 = num.substring(0, i);
        
        // Перевірка на ведучі нулі для першого числа
        if (s1.length > 1 && s1[0] === '0') break;

        // Перебираємо всі можливі довжини другого числа (j)
        for (let j = 1; i + j < n; j++) {
            const s2 = num.substring(i, i + j);
            
            // Перевірка на ведучі нулі для другого числа
            if (s2.length > 1 && s2[0] === '0') break;

            // Створюємо початковий масив із двох чисел
            let sequence = [s1, s2];
            let currentIdx = i + j;

            // Поки не дійшли до кінця рядка, обчислюємо наступне число
            while (currentIdx < n) {
                // Використовуємо BigInt для дуже великих чисел (як у тестах)
                const sum = (BigInt(sequence[sequence.length - 2]) + 
                            BigInt(sequence[sequence.length - 1])).toString();
                
                // Перевіряємо, чи починається залишкова частина рядка з цієї суми
                if (num.startsWith(sum, currentIdx)) {
                    sequence.push(sum);
                    currentIdx += sum.length;
                } else {
                    // Якщо сума не збігається, ця пара s1 та s2 не підходить
                    break;
                }
            }

            // Якщо ми дійшли до самого кінця рядка і в нас є мінімум 3 числа
            if (currentIdx === n && sequence.length >= 3) {
                return sequence;
            }
        }
    }

    // Якщо жодної послідовності не знайдено
    return [];
}


module.exports = findAdditiveNumbers;
