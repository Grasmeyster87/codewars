/*function duplicateOrUnique(arr){
  if (arr.length == 0) {
    return  '';
  }

  let obj = {};
  let count = 0;
  let resOne = 0;
  let resTwo = 0;

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] ? obj[arr[i]] += 1: obj[arr[i]] = 1;
  }
  for(let key in obj) {
    if (obj[key] == 1) {
      count ++;
      resOne = key;
    } else {
      resTwo = key;
    }
  }
  
  return count == 1 ? +resOne : +resTwo;
}*/

function duplicateOrUnique(arr) {
  const len = arr.length;
  if (len === 0) {
    return '';
  }

  const half = (len + 1) >> 1;
  let x = 0;
  let big = false;

  for (let i = 0; i < len; i++) {
    const v = arr[i];
    x ^= v;
    if (v > half) big = true;
  }

  // чётная длина -> точно тип 1; нечётная -> тип 1, если есть элемент > half
  if ((len & 1) === 0 || big) {
    const n = len - 1;
    let f;
    switch (n & 3) {
      case 0: f = n; break;
      case 1: f = 1; break;
      case 2: f = n + 1; break;
      default: f = 0;
    }
    return f ^ x;
  }

  return x; // тип 2
}

module.exports = duplicateOrUnique;