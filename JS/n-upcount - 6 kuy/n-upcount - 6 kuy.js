function nUpCount(arr, n) {
    let count = 0;
    let currentValue = 0;
    let prevValue = 0;

    for (let i = 0; i < arr.length; i++) {
        prevValue = currentValue;
        currentValue += arr[i];
        if (prevValue <= n && currentValue > n) {
            count++;
        }
    }
    return count;
}
module.exports = nUpCount;
