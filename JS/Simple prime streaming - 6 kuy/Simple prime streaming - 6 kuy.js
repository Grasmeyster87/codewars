function solve(a, b) {
    // Проверка простоты числа
    function isPrime(n) {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;
        for (let i = 3; i * i <= n; i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }

    // Генерация последовательности
    let sequence = "";
    let num = 2;
    while (sequence.length < a + b) {
        if (isPrime(num)) {
            sequence += num.toString();
        }
        num++;
    }

    // Возвращаем нужный кусок
    return sequence.slice(a, a + b);
}

module.exports = solve;
