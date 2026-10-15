function digitalRoot(n) {
    // базовий випадок: якщо число однозначне
    if (n < 10) return n;

    // знаходимо суму цифр
    let sum = 0;
    for (let digit of n.toString()) {
        sum += parseInt(digit);
    }

    // рекурсивний виклик з новим значенням
    return digitalRoot(sum);
}
console.log(digitalRoot(942)); // 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

module.exports = digitalRoot;
