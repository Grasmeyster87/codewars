function notPrimes(a, b) {
  if (a >= b) return [];

  const maxN = b - 1;
  // Решето Ератосфена
  const isPrime = new Array(maxN + 1).fill(true);
  isPrime[0] = false;
  if (maxN >= 1) isPrime[1] = false;
  for (let p = 2; p * p <= maxN; p++) {
    if (isPrime[p]) {
      for (let q = p * p; q <= maxN; q += p) isPrime[q] = false;
    }
  }

  const allowed = new Set(['2', '3', '5', '7']);
  const res = [];

  for (let n = a; n < b; n++) {
    // Пропускаємо прості числа
    if (n >= 2 && isPrime[n]) continue;

    // Перевірка цифр
    const s = String(n);
    let ok = true;
    for (let i = 0; i < s.length; i++) {
      if (!allowed.has(s[i])) { ok = false; break; }
    }
    if (ok) res.push(n);
  }

  return res;
}

module.exports = notPrimes;