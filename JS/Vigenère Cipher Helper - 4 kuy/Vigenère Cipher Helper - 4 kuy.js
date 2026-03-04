class VigenèreCipher {
  constructor(key, abc) {
    this.key = key;
    this.abc = abc;
    this.abcLen = abc.length;
  }

  encode(str) {
    return str
      .split('')
      .map((char, i) => {
        const charIdx = this.abc.indexOf(char);
        // Якщо символу немає в алфавіті, повертаємо його без змін
        if (charIdx === -1) return char;

        const keyChar = this.key[i % this.key.length];
        const keyIdx = this.abc.indexOf(keyChar);

        // Формула шифрування: (індекс_символу + індекс_ключа) % довжина_алфавіту
        const newIdx = (charIdx + keyIdx) % this.abcLen;
        return this.abc[newIdx];
      })
      .join('');
  }

  decode(str) {
    return str
      .split('')
      .map((char, i) => {
        const charIdx = this.abc.indexOf(char);
        // Якщо символу немає в алфавіті, повертаємо його без змін
        if (charIdx === -1) return char;

        const keyChar = this.key[i % this.key.length];
        const keyIdx = this.abc.indexOf(keyChar);

        // Формула дешифрування: (індекс_символу - індекс_ключа + довжина_алфавіту) % довжина_алфавіту
        // Додаємо довжину алфавіту, щоб уникнути від'ємних значень при відніманні
        const newIdx = (charIdx - keyIdx + this.abcLen) % this.abcLen;
        return this.abc[newIdx];
      })
      .join('');
  }
}

module.exports = VigenèreCipher;