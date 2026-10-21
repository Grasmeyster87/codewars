function catalan(n) {
  let res = 1n;
  for (let i = 0n; i < BigInt(n); i++) {
    res = (res * 2n * (2n * i + 1n)) / (i + 2n);
  }
  return res;
}

console.log(catalan(9)); // 4862n
module.exports = catalan;