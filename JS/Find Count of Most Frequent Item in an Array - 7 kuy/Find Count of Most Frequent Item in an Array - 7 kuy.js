function mostFrequentItemCount(collection) {
    if (collection.length === 0) return 0;

    let counter = {};
    let maxCount = 0;

    for (let i = 0; i < collection.length; i++) {
        let item = collection[i];
        counter[item] = (counter[item] || 0) + 1;

        if (counter[item] > maxCount) {
            maxCount = counter[item];
        }
    }

    return maxCount;
}

module.exports = mostFrequentItemCount;

let arr = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3];
console.log(mostFrequentItemCount(arr)); // 5
