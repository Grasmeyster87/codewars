function findLongest(array) {
    return array.reduce((a, b) => {
        return b.toString().length > a.toString().length ? b : a;
    });

}

module.exports = findLongest;