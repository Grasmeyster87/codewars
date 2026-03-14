function mergeStrings(first, second) {
  // шукаємо найдовший збіг
  for (let i = Math.min(first.length, second.length); i > 0; i--) {
    if (first.endsWith(second.slice(0, i))) {
      return first + second.slice(i);
    }
  }
  return first + second; // якщо збігів немає
}

console.log(mergeStrings('abcde', 'cdefgh'));

module.exports = mergeStrings;