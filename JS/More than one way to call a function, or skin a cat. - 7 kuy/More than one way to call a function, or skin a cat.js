function sum (a,b) {
  if (b !== undefined) {
    return a + b;
  }else {
    return function (c) {
        return a + c;
    }
  }
}
module.exports = sum;