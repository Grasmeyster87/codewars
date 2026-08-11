function last(...args) {
     // Если передан один аргумент
  if (args.length === 1) {
    let value = args[0];

    // Массив
    if (Array.isArray(value)) {
      return value[value.length - 1];
    }

    // Строка
    if (typeof value === "string") {
      return value[value.length - 1];
    }

    // Просто число или другой тип
    return value;
  }

  // Если аргументов несколько — вернуть последний
  return args[args.length - 1];
}
module.exports = last;
