function arr2bin(arr) {
    let resSum = 0;
    for (el of arr) {
        if (typeof el == 'number') {
            resSum += el;
        } else {
            resSum += 0;
        }
    }

    if (Number.isNaN(resSum)) {
        return 'NaN';
    }

    return resSum.toString(2);
}
module.exports = arr2bin;
