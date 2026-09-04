function brightest(colors) {
    const value = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return Math.max(r, g, b);
    };

    return colors.reduce((best, color) =>
        value(color) > value(best) ? color : best,
    );
}

module.exports = brightest;
