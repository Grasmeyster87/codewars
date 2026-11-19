const crypto = require('crypto');

function passwordCracker(hash) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let len = 1; len <= 5; len++) {
        const idx = new Array(len).fill(0);

        while (true) {
            let candidate = '';
            for (let i = 0; i < len; i++) candidate += alphabet[idx[i]];

            if (
                crypto.createHash('sha1').update(candidate).digest('hex') ===
                hash
            ) {
                return candidate;
            }

            // інкремент "лічильника" у 26-ковій системі
            let pos = len - 1;
            while (pos >= 0) {
                idx[pos]++;
                if (idx[pos] < 26) break;
                idx[pos] = 0;
                pos--;
            }
            if (pos < 0) break; // перебрали всі варіанти цієї довжини
        }
    }

    return '';
}
module.exports = passwordCracker;
