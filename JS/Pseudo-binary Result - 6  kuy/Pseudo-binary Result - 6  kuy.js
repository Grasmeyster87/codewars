function pseudoBinary(n) {
  // Приводим n к BigInt, если оно еще не таковое (для безопасности)
  const bn = BigInt(n);
  
  // Очередь для BFS. Хранит объекты:
  // rem: текущий остаток от деления найденного псевдобинарного числа на n
  // val: само псевдобинарное число (P)
  const queue = [{ rem: 1n % bn, val: 1n }];
  
  // Сет для хранения посещенных остатков, чтобы избежать зацикливания
  const visited = new Set([1n % bn]);
  
  // Используем индекс вместо shift() для производительности
  let head = 0;

  while (head < queue.length) {
    const { rem, val } = queue[head++];

    // Если остаток 0, значит val делится на n нацело.
    // Наша задача вернуть m, то есть (val / n)
    if (rem === 0n) {
      return val / bn;
    }

    // Генерируем следующие два числа: дописываем '0' и дописываем '1'
    
    // Вариант 1: Дописываем 0 (это умножение на 10)
    const rem0 = (rem * 10n) % bn;
    if (!visited.has(rem0)) {
      visited.add(rem0);
      queue.push({ rem: rem0, val: val * 10n });
    }

    // Вариант 2: Дописываем 1 (это умножение на 10 и прибавление 1)
    const rem1 = (rem * 10n + 1n) % bn;
    if (!visited.has(rem1)) {
      visited.add(rem1);
      queue.push({ rem: rem1, val: val * 10n + 1n });
    }
  }
}

module.exports = pseudoBinary;