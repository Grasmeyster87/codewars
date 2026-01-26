
function duplicateEncode(word) {
  // приводим всё к нижнему регистру
  const lower = word.toLowerCase();

  return lower
    .split('')
    .map((ch, _, arr) => {
      // считаем сколько раз символ встречается
      const count = arr.filter(c => c === ch).length;
      return count > 1 ? ')' : '(';
    })
    .join('');
}

/* function duplicateEncode(word) {
  const lower = word.toLowerCase();
  const freq = {};

  // Считаем сколько раз встречается каждый символ
  for (const ch of lower) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Формируем строку скобок
  return lower
    .split('')
    .map(ch => (freq[ch] > 1 ? ')' : '('))
    .join('');
} */

module.exports = duplicateEncode;
