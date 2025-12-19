function numberOfPairs(gloves) {
    let counts = {}; // словник для підрахунку кольорів

    for (let glove of gloves) {
        counts[glove] = (counts[glove] || 0) + 1;
    }

    let pairs = 0;
    for (let color in counts) {
        pairs += Math.floor(counts[color] / 2);
    }

    return pairs;
}

module.exports = numberOfPairs;
