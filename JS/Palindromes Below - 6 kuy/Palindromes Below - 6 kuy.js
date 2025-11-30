Number.prototype.palindromeBelow = function(base){
    const res = [];
  for (let i = 1; i < this; i++) {
    const str = i.toString(base);
    if (str === str.split('').reverse().join('')) {
      res.push(i);
    }
  }
  return res;

}
//module.exports = Number.prototype.palindromeBelow;