// Note: MORSE_CODE is preloaded globally in the CodeWars environment.

export function decodeBits(bits) {
    // 1. Trim leading and trailing zeros as they don't carry any information
    const trimmed = bits.replace(/^0+|0+$/g, '');
    if (!trimmed) return '';

    // 2. Find all consecutive blocks of 1s and 0s
    const blocks = trimmed.match(/1+|0+/g);
    if (!blocks) return '';

    // 3. The sampling rate is the minimum block length found.
    // This perfectly handles ambiguous cases (e.g. only 1s) by assuming the shortest block is 1 unit (dot).
    const rate = Math.min(...blocks.map(b => b.length));

    // 4. Replace sequences with Morse symbols in descending order of length to avoid partial matches
    return trimmed
        .replace(new RegExp('0'.repeat(7 * rate), 'g'), '   ') // 7 units -> space between words
        .replace(new RegExp('0'.repeat(3 * rate), 'g'), ' ')   // 3 units -> space between characters
        .replace(new RegExp('1'.repeat(3 * rate), 'g'), '-')   // 3 units -> dash
        .replace(new RegExp('1'.repeat(rate), 'g'), '.')       // 1 unit  -> dot
        .replace(new RegExp('0'.repeat(rate), 'g'), '');       // 1 unit  -> element separator (ignored)
}

export function decodeMorse(morseCode) {
    // Split the Morse string into words, then words into characters, and map them
    return morseCode
        .trim()
        .split('   ')
        .map(word => 
            word
                .split(' ')
                .map(char => MORSE_CODE[char] || '')
                .join('')
        )
        .join(' ');
}