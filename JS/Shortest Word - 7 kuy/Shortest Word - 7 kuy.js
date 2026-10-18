function findShort(s) {
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
}

let res = findShort("Let's travel abroad shall we"); // 2
console.log(res);

module.exports = findShort;
