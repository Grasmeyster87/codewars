function dirReduc(arr) {
    const opposite = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        EAST: 'WEST',
        WEST: 'EAST',
    };

    return arr.reduce((acc, curr) => {
        if (opposite[curr] === acc[acc.length - 1]) {
            acc.pop();
        } else {
            acc.push(curr);
        }

        return acc;
    }, []);
}


module.exports = dirReduc;
