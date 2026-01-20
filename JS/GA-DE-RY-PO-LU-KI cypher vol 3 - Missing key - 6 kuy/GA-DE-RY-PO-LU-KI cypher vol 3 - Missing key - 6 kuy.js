function findTheKey(messages, secrets) {
    const pairs = new Set();

    for (let i = 0; i < messages.length; i++) {
        const msg = messages[i];
        const sec = secrets[i];

        for (let j = 0; j < msg.length; j++) {
            const mChar = msg[j];
            const sChar = sec[j];

            if (mChar !== sChar && mChar !== ' ' && sChar !== ' ') {
                // створюємо пару в алфавітному порядку
                const pair = [mChar, sChar].sort().join('');
                pairs.add(pair);
            }
        }
    }

    // перетворюємо Set у масив і сортуємо за першою літерою
    return Array.from(pairs).sort().join('');
}

module.exports = findTheKey;