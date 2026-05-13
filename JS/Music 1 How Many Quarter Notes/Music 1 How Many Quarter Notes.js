function findQuarterNotes(timeSignature) {
  // Перевірка формату
  const parts = timeSignature.split("/");
  if (parts.length !== 2) return null;

  const numerator = parseInt(parts[0], 10);
  const denominator = parseInt(parts[1], 10);

  // Перевірка діапазонів
  if (isNaN(numerator) || isNaN(denominator)) return null;
  if (numerator <= 0 || numerator >= 4096) return null;
  if (denominator <= 0 || denominator >= 256) return null;

  // Перевірка, що знаменник — степінь двійки
  if ((denominator & (denominator - 1)) !== 0) return null;

  // Обчислення кількості чвертей
  const quarters = Math.floor((numerator / denominator) * 4);

  // Якщо менше ніж одна чверть — повертаємо 0
  return quarters < 1 ? 0 : quarters;
}
module.exports = findQuarterNotes;

// Приклади
console.log(findQuarterNotes("3/4"));   // 3
console.log(findQuarterNotes("7/8"));   // 3
console.log(findQuarterNotes("11/8"));  // 5
console.log(findQuarterNotes("10/7"));  // null
console.log(findQuarterNotes("3/16"));  // 0