function towerBuilder(nFloors) {
    const tower = [];

    for (let i = 1; i <= nFloors; i++) {
        const stars = 2 * i - 1;              // кількість "*" на поточному поверсі
        const spaces = nFloors - i;           // кількість пробілів з кожного боку

        const floor = ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces);
        tower.push(floor);
    }

    return tower;
}

module.exports = towerBuilder;