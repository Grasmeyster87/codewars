function deleteValues(array, pred) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (pred(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
}


function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return n % 2 === 1;
}

var arr = [1,3,2,4,5,7,6,8,10,9];
console.log(deleteValues(arr, isEven)) // 1,3,5,7,9
console.log(deleteValues(arr, isOdd))  // 2,4,6,8,10

module.exports = deleteValues;