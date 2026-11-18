function highestRank(arr){
 return arr.sort((a,b) => arr.filter(v => v===a).length - arr.filter(v => v===b).length).pop();
}
var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
console.log(highestRank(arr));
module.exports = highestRank;