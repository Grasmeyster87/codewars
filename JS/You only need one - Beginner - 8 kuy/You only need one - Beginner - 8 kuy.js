function check(a, x) {
  return a.includes(x);
}
module.exports = check;
console.log(check([101, 45, 75, 105, 99, 107], 107))