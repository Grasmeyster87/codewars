function lookAndWrite(n) {
    // Базовий випадок для n = 0, послідовність "11"
    if (n === 0) return 2;

    // Масив для зберігання кількості кожної цифри (індекси 0-9)
    // Початкова послідовність "11" містить дві одиниці.
    const counts = [0, 2, 0, 0, 0, 0, 0, 0, 0, 0];
    
    // Початкова довжина "11"
    let totalLength = 2;

    // Буфер для накопичення змін на кожному кроці.
    // Використовуємо TypedArray для кращої продуктивності в JS.
    const additions = new Int32Array(10);

    for (let i = 0; i < n; i++) {
        // Очищаємо буфер змін перед кожним "поглядом"
        additions.fill(0);

        // Перевіряємо кожну цифру від 0 до 9
        for (let digit = 0; digit < 10; digit++) {
            const count = counts[digit];

            // Якщо цифра не зустрічається, пропускаємо
            if (count === 0) continue;

            // Логіка: додаємо пару "{count}{digit}"
            
            // 1. Обробка самої цифри (права частина пари)
            // Додається один символ (сама цифра)
            additions[digit]++;
            totalLength++;

            // 2. Обробка числа кількості (ліва частина пари)
            // Нам потрібно розбити число `count` на окремі цифри
            // Наприклад, якщо count = 12, ми додаємо '1' та '2'
            let temp = count;
            
            // Оптимізація: якщо число менше 10, не запускаємо цикл while
            if (temp < 10) {
                additions[temp]++;
                totalLength++;
            } else {
                // Розбиваємо число на цифри математично (швидше за String conversion)
                while (temp > 0) {
                    const d = temp % 10;
                    additions[d]++;
                    totalLength++;
                    // Використовуємо побітове АБО для швидкого округлення до цілого
                    temp = (temp / 10) | 0; 
                }
            }
        }

        // Застосовуємо накопичені зміни до головного масиву
        for (let k = 0; k < 10; k++) {
            counts[k] += additions[k];
        }
    }

    return totalLength;
}
module.exports = lookAndWrite;
