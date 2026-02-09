function solution(first, second) {
    while (true) {
        let prev = second - first;

        // если последовательность перестаёт быть неубывающей или становится отрицательной
        if (prev < 0 || prev > first) {
            return [first, second];
        }

        // сдвигаем пару назад
        second = first;
        first = prev;
    }
}


let res = solution(1186, 1919); // [2, 7]
console.log(res);

module.exports = solution;
