function rectangleRotation(a, b) {
  // The rectangle (half-widths a/2 and b/2) is rotated by 45 degrees.
  // In rotated coordinates s = x + y, d = y - x, the "inside" condition becomes:
  //   |s| <= a / sqrt(2)   and   |d| <= b / sqrt(2)
  // A point (x, y) is an integer point iff s and d are integers of the SAME parity
  // (since x = (s - d) / 2, y = (s + d) / 2 must both be integers).

  // Find the largest integer k such that k <= n / sqrt(2), using only integer math
  // (avoids floating point rounding issues for large a, b).
  function maxBound(n) {
    let k = Math.floor(n / Math.SQRT2);
    while (2 * (k + 1) * (k + 1) <= n * n) k++;
    while (2 * k * k > n * n) k--;
    return k;
  }

  // For range [-m, m], count how many integers are even and how many are odd.
  function evenOddCount(m) {
    const total = 2 * m + 1;
    const evenCount = 2 * Math.floor(m / 2) + 1;
    const oddCount = total - evenCount;
    return [evenCount, oddCount];
  }

  const maxS = maxBound(a);
  const maxD = maxBound(b);

  const [evenS, oddS] = evenOddCount(maxS);
  const [evenD, oddD] = evenOddCount(maxD);

  // Valid (s, d) pairs must share parity: both even or both odd.
  return evenS * evenD + oddS * oddD;
}

module.exports = rectangleRotation;