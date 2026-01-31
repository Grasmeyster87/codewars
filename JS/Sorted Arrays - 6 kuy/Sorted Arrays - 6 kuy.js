function nthSmallest(...args) {
  const n = args.pop(); // последний аргумент — это n
  const merged = args.flat().sort((a, b) => a - b);
  return merged[n - 1];
}


console.log(nthSmallest([[1], [2], [3], [4], [5, 6, 7, 8], [9], [10]], 7))
module.exports = nthSmallest;