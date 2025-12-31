function grow(x){
return x.reduce((a,b) => a * b, 1);
}

let res = grow([1, 2, 3]); // 6
console.log(res);
module.exports = grow;