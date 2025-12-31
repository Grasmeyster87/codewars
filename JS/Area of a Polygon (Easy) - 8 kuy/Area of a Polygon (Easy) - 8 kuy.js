function polygonArea(A,B,C,D){
    return A*B + (C - A) * D
}

let res = polygonArea(2, 5, 10, 2.5); // 30
console.log(res);

module.exports = polygonArea;