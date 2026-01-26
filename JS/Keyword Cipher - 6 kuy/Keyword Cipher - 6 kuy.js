function keywordCipher(string, keyword) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const kw = (keyword || '').toLowerCase();
    const used = new Set();
    let key = '';

    for (const ch of kw) {
        if (alpha.includes(ch) && !used.has(ch)) {
            used.add(ch);
            key += ch;
        }
    }

    for (const ch of alpha) {
        if (!used.has(ch)) key += ch;
    }

    const input = (string || '').toLowerCase();
    let out = '';

    for (const ch of input) {
        if (alpha.includes(ch)) {
            out += key[alpha.indexOf(ch)];
        } else {
            out += ch;
        }
    }

    return out;
}

/* function keywordCipher(string, keyword) {
  const dict = new Map(Array.from(
    new Set(keyword + "abcdefghijklmnopqrstuvwxyz"),
    (c, i) => [String.fromCharCode(97 + i), c]
  ))
  return string.replace(/\w/g, c => dict.get(c.toLowerCase()))
} */

module.exports = keywordCipher;
