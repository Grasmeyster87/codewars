function maxSequence(xs) {
  if (xs.length === 0) return 0;

  let maxSoFar = xs[0];
  let maxEndingHere = xs[0];

  for (let i = 1; i < xs.length; i++) {
    maxEndingHere = Math.max(xs[i], maxEndingHere + xs[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return Math.max(0, maxSoFar); // Якщо всі числа в масиві негативні, повертаємо 0
}

module.exports = maxSequence;