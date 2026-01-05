function toUnderscore(input) {
  // Перетворюємо будь-який тип у рядок
  const str = String(input);

  // Розбиваємо по заглавних літерах
  return str
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
}


console.log(toUnderscore('TestController'));

module.exports = toUnderscore;