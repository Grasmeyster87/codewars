function sumArray(array) {
return array && array.length > 2 ? array.reduce((a, b) => a + b, 0) - Math.min(...array) - Math.max(...array) : 0;
}
console.log(sumArray([ -6, 20, -1, 10, -12 ])); 
module.exports = sumArray;