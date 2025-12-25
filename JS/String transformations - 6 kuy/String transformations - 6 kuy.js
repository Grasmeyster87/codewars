/* function stringTransformation(string, transformations) {
    for (let transformation of transformations) {
        if (transformation === 'U') {
            string = string.toUpperCase();
        } else if (transformation === 'L') {
            string = string.toLowerCase();
        } else if (transformation === 'R') {
            string = string.split('').reverse().join('');  
        } else if (transformation === 'D') {
            string = string.split('').map(char => char + char).join('');
        }       
    }
    return string;
} */

function stringTransformation(str, transformations) {
    let isUpper = false;
    let isLower = false;
    let isReversed = false;
    let dupCount = 1;

    for (let t of transformations) {
        if (t === 'U') {
            isUpper = true;
            isLower = false;
        } else if (t === 'L') {
            isLower = true;
            isUpper = false;
        } else if (t === 'R') {
            isReversed = !isReversed;
        } else if (t === 'D') {
            dupCount *= 2;
        }
    }

    // применяем регистр
    if (isUpper) str = str.toUpperCase();
    if (isLower) str = str.toLowerCase();

    // применяем разворот
    if (isReversed) str = str.split('').reverse().join('');

    // применяем дублирование
    if (dupCount > 1) {
        let result = [];
        for (let ch of str) {
            result.push(ch.repeat(dupCount));
        }
        str = result.join('');
    }

    return str;
}

module.exports = stringTransformation;
