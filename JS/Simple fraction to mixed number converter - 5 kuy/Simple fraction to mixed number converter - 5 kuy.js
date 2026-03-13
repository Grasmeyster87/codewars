function mixedFraction(s) {
    // Розбиваємо рядок на чисельник і знаменник
    const [x, y] = s.split('/').map(Number);
    
    // Перевіряємо ділення на нуль
    if (y === 0) {
        throw new Error();
    }
    
    // Якщо чисельник дорівнює нулю, повертаємо 0
    if (x === 0) {
        return '0';
    }
    
    // Визначаємо знак
    const isNegative = (x < 0) !== (y < 0);
    
    // Працюємо з абсолютними значеннями
    let num = Math.abs(x);
    let den = Math.abs(y);
    
    // Знаходимо цілу частину
    const whole = Math.floor(num / den);
    let remainder = num % den;
    
    // Якщо немає залишку, повертаємо лише цілу частину
    if (remainder === 0) {
        if (isNegative && whole !== 0) {
            return `-${whole}`;
        } else {
            return `${whole}`;
        }
    }
    
    // Скорочуємо дріб
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const g = gcd(remainder, den);
    remainder /= g;
    den /= g;
    
    // Формуємо результат
    const fraction = `${remainder}/${den}`;
    
    if (whole === 0) {
        // Якщо ціла частина дорівнює нулю, повертаємо лише дріб
        if (isNegative) {
            return `-${fraction}`;
        } else {
            return fraction;
        }
    } else {
        // Якщо є ціла частина, формуємо повний результат
        if (isNegative) {
            return `-${whole} ${fraction}`;
        } else {
            return `${whole} ${fraction}`;
        }
    }
}

module.exports = mixedFraction;
