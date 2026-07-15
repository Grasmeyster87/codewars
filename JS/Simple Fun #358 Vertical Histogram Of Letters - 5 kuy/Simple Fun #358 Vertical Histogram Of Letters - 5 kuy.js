function verticalHistogramOf(s) {
  // Рахуємо кількість кожної великої літери
  const counts = {};
  for (const ch of s) {
    if (ch >= 'A' && ch <= 'Z') {
      counts[ch] = (counts[ch] || 0) + 1;
    }
  }

  // Якщо немає великих літер
  if (Object.keys(counts).length === 0) return '';

  // Визначаємо порядок літер (A-Z), але тільки ті, що зустрічаються
  const letters = Object.keys(counts).sort();

  // Максимальна висота гістограми
  const maxCount = Math.max(...letters.map(l => counts[l]));

  // Будуємо рядки від верхнього рівня до нижнього
  const rows = [];
  for (let level = maxCount; level > 0; level--) {
    let row = letters.map(l => (counts[l] >= level ? '*' : ' ')).join(' ');
    // Прибираємо зайві пробіли справа
    row = row.replace(/\s+$/, '');
    rows.push(row);
  }

  // Додаємо рядок з літерами
  rows.push(letters.join(' '));

  return rows.join('\n');
}

module.exports = verticalHistogramOf;
