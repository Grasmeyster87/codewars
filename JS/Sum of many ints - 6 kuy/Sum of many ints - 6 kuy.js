function f(n, m) {
  n = BigInt(n);
  m = BigInt(m);

  const blocks = n / m;               
  const r = n % m;

  return Number(blocks * (m * (m - 1n) / 2n) + r * (r + 1n) / 2n);
}

module.exports = f;