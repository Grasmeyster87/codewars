function sequenceSum(begin, end, step) {
  // Початок дорівнює межі = повертаємо його незалежно від кроку
  if (begin === end) return begin;

  // Неможлива послідовність
  if ((step > 0 && begin > end) ||  (step < 0 && begin < end)) return 0;

  // Кількість членів послідовності
  const n = Math.floor((end - begin) / step) + 1;

  // Останній член
  const last = begin + (n - 1) * step;

  // Сумма арифметичної прогрессії
  return (n * (begin + last)) / 2;
}

module.exports = sequenceSum;