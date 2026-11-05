function sc(s) {
    return [...s]
        .filter((c) => s.includes(c > 'Z' ? c.toUpperCase() : c.toLowerCase()))
        .join('');
}

module.exports = sc;
