function power(base, exponent) {
  let res = 1;

  if (exponent > 0) {
    for (let i = 0; i < exponent; i++) {
      res *= base;
    }
  } else if (exponent < 0) {
    for (let i = 0; i < -exponent; i++) {
      res *= base;
    }
    res = 1 / res;
  }
  // если exponent === 0, res остаётся = 1
  return res;
}
console.log(power(2, -2));
module.exports = power;
