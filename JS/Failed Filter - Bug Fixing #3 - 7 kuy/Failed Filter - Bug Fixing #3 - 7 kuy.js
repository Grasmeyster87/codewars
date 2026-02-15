let filterNumbers = function(str) {
  return str.split('').filter(c => /\D/.test(c)).join('');
}
console.log(filterNumbers("4483j9t0r0df0")) //'jtrdf'
module.exports = filterNumbers;