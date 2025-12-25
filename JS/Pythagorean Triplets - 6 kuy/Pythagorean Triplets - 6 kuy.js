function pythagoreanTriplet(n) {
  // Перевірка досконалого куба
  const isPerfectCube = (x) => {
    const t = Math.round(Math.cbrt(x));
    return t * t * t === x ? t : null;
  };

  // НСД
  const gcd = (a, b) => {
    while (b) [a, b] = [b, a % b];
    return a;
  };

  // межа для m: достатньо до sqrt(n), цього вистачає для n < 1e7
  const limit = Math.floor(Math.sqrt(n));

  for (let m = 2; m <= limit; m++) {
    for (let r = 1; r < m; r++) {
      // умови примітивності
      if (((m - r) & 1) === 0) continue;       // різниця має бути непарною
      if (gcd(m, r) !== 1) continue;           // взаємно прості

      const a = m * m - r * r;
      const b = 2 * m * r;
      const c = m * m + r * r;

      const P0 = a * b * c;
      if (P0 > n) continue;

      if (n % P0 === 0) {
        const q = n / P0;
        const t = isPerfectCube(q);
        if (t) {
          return [t * a, t * b, t * c].sort((x, y) => x - y);
        }
      }
    }
  }

  return null;
}


module.exports = pythagoreanTriplet;