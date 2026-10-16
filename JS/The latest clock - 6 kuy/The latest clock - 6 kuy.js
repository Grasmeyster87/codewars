function latestClock(a, b, c, d) {
    let hour = [a, b, c, d];
    let comb = [];
    for (let i = 0; i < hour.length; i++) {
        for (let j = 0; j < hour.length; j++) {
            if (i === j) continue;
            comb.push({ value: hour[i] * 10 + hour[j], i, j });
        }
    }

    let best = null;
    for (const h of comb.filter((x) => x.value <= 23)) {
        const mins = comb.filter(
            (m) =>
                m.value <= 59 &&
                m.i != h.i &&
                m.i != h.j &&
                m.j != h.i &&
                m.j != h.j,
        );
        if (!mins.length) continue;
        const mn = Math.max(...mins.map((m) => m.value));
        if (
            !best ||
            h.value > best.hr ||
            (h.value === best.hr && mn > best.mn)
        ) {
            best = { hr: h.value, mn };
        }
    }
    return `${String(best.hr).padStart(2, '0')}:${String(best.mn).padStart(2, '0')}`;
}

console.log(latestClock(1, 9, 8, 3)); // '19:38'
module.exports = latestClock;
