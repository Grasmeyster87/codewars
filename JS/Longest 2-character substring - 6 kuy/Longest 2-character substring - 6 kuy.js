

function substring(str) {
    const counts = new Map();
    let left = 0;
    let bestStart = 0;
    let bestLen = 0;

    for (let right = 0; right < str.length; right++) {
        const ch = str[right];
        counts.set(ch, (counts.get(ch) || 0) + 1);

        // у вікні більше 2 унікальних символів — звужуємо зліва
        while (counts.size > 2) {
            const l = str[left];
            const c = counts.get(l) - 1;
            if (c === 0) counts.delete(l);
            else counts.set(l, c);
            left++;
        }

        // строге ">" гарантує, що при рівній довжині лишається перше входження
        if (right - left + 1 > bestLen) {
            bestLen = right - left + 1;
            bestStart = left;
        }
    }

    return str.slice(bestStart, bestStart + bestLen);
}

console.log(substring('abcddeejabbedsajaajjaajjajajajjajjaaacedajajaj')); // 'ajaajjaajjajajajjajjaaa'

module.exports = substring;
