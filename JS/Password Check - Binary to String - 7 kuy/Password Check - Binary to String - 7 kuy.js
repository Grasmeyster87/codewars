function decodePass(passArr, bin) {
    const chars = bin
        .split(' ')
        .map((bin) => String.fromCharCode(parseInt(bin, 2)))
        .join('');
    let res = false;
    if (passArr.includes(chars)) {
        return chars;
    } else {
        return false;
    }
}

const bin =
    '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011';

console.log(decodePass(['password123', 'admin', 'admin1'], bin));
module.exports = decodePass;
