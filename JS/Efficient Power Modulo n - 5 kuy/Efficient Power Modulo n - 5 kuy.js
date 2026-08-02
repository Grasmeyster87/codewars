//Calculate (x^y) % n for large y
function modpow(x, y, n) {
  x = BigInt(x);
  y = BigInt(y);
  n = BigInt(n);

  let result = 1n;
  while (y > 0n) {
    if (y % 2n === 1n) {
      result = (result * x) % n;
    }
    x = (x * x) % n;
    y = y / 2n;
  }

  // Приводим обратно к Number, чтобы тесты совпадали
  return Number(result);
}

module.exports = modpow;