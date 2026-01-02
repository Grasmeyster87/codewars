function sum(a) {
  // якщо аргументів немає — одразу повертаємо 0
  if (a === undefined) return 0;

  let current = a;

  function inner(b) {
    if (b !== undefined) {
      current += b;
      return inner; // повертаємо саму себе для наступного виклику
    }
    return current; // завершення ланцюга
  }

  return inner;
}

module.exports = sum;