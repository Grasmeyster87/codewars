function createPhoneNumber(numbers) {
    let res = [];
    res.push('(');
    res.push(...numbers.slice(0, 3));
    res.push(')');
    res.push(' ');
    res.push(...numbers.slice(3, 6));
    res.push('-');
    res.push(...numbers.slice(6));
    return res.join('');
}

let value = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => возвращает "(123) 456-7890"
console.log(value);
module.exports = createPhoneNumber;

/*
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`;
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])); 
// "(123) 456-7890"

function createPhoneNumber(numbers) {
  return "(xxx) xxx-xxxx".replace(/x/g, () => numbers.shift());
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
// "(123) 456-7890"


function createPhoneNumber(numbers) {
  const str = numbers.join('');
  return `(${str.substring(0,3)}) ${str.substring(3,6)}-${str.substring(6)}`;
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
// "(123) 456-7890"

*/
