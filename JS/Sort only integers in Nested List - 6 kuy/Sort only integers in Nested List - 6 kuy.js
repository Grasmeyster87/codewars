function sortNested3(arrays) {
    if (!Array.isArray(arrays)) {
        throw new Error('Input is not an array');
    }

    // 1. Сплощуємо масив (O(n))
    const flatSorted = arrays.flat(Infinity).sort((a, b) => a - b);

    // Використовуємо змінну-лічильник замість .shift()
    let currentIndex = 0;

    // 2. Рекурсивна функція для відновлення структури
    function fillStructure(currentArray) {
        for (let i = 0; i < currentArray.length; i++) {
            if (Array.isArray(currentArray[i])) {
                fillStructure(currentArray[i]);
            } else {
                // Замінюємо значення за індексом (O(1))
                currentArray[i] = flatSorted[currentIndex++];
            }
        }
    }

    fillStructure(arrays);
    return arrays;
}

let arrvalue = [
    [
        [82, 87],
        [47, 44],
    ],
    [
        [70, 94],
        [40, 64],
    ],
];
console.log(sortNested3(arrvalue));
module.exports = sortNested3;
