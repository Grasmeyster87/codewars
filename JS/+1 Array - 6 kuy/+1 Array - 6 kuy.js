/*function upArray(arr) {
    if (!arr.length || arr.some(d => !Number.isInteger(d) || d < 0 || d > 9)) {
        return null;
    }
    const res = [...arr];
    for (let i = res.length - 1; i >= 0; i--) {
        if (res[i] < 9) {
            res[i]++;
            return res;
        }
        res[i] = 0;
    }
    return [1, ...res];
}*/

function upArray(arr) {
    if (arr.length == 0) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i]) || arr[i] > 9 || arr[i] < 0) {
            return null;
        }
    }
    let resultArr = [];
    let reestr = 0;
    for (let i = arr.length - 1; i > -1; i--) {
        if (i == arr.length - 1) {
            if (arr[i] + 1 > 9) {
                reestr = 1;
                resultArr[i] = 0;
            } else {
                resultArr[i] = arr[i] + 1;
            }
        } else if (reestr > 0) {
            if (arr[i] + reestr > 9) {
                resultArr[i] = 0;
                reestr = 1;
            } else {
                resultArr[i] = arr[i] + reestr;
                reestr = 0;
            }
        } else {
            resultArr[i] = arr[i];
        }
    }
    if (reestr > 0) {
        resultArr.unshift(1);
    }
    return resultArr;
}

const arr1 = [4, 3, 2, 5];
const arr2 = [0, 7];

console.log(upArray(arr1));
console.log(upArray(arr2));

module.exports = upArray;
