function cleanString(s) {
    return [...s]
        .reduce((acc, c) => {
            c === '#' ? acc.pop() : acc.push(c);
            return acc;
        }, [])
        .join('');
}

module.exports = cleanString;
