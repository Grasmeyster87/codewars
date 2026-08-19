function stray(numbers) {
    // Сортируем массив
    numbers.sort((a, b) => a - b);

    // Если первый элемент отличается от второго — значит он лишний
    if (numbers[0] !== numbers[1]) {
        return numbers[0];
    }

    // Иначе лишний элемент будет последним
    return numbers[numbers.length - 1];
}
let arr = [1, 1, 2];
console.log(stray(arr));

module.exports = stray;
