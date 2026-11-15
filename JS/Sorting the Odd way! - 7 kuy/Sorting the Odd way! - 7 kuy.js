const sortItOut = a => [...a.filter(n => Math.floor(n) % 2).sort((x, y) => x - y), ...a.filter(n => !(Math.floor(n) % 2)).sort((x, y) => y - x)];

console.log(sortItOut([1,2,3,4,5,6,7,8,9])) // [1, 3, 5, 7, 9, 8, 6, 4, 2]
module.exports = sortItOut;