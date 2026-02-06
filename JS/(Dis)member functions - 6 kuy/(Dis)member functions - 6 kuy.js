function dismember(func) {
  // Перетворюємо функцію на рядок
  const str = func.toString();

  // Знаходимо частину між дужками (аргументи)
  const match = str.match(/\(([^)]*)\)/);

  if (!match) return [];

  // Беремо аргументи, розділяємо по комі, обрізаємо пробіли
  return match[1]
    .split(',')
    .map(arg => arg.trim())
    .filter(arg => arg.length > 0);
}

module.exports = dismember;