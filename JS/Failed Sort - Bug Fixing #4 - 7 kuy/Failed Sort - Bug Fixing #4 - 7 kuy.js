let sortArray = function(value) {
  return value.split('').sort((c, p) => c - p ).join('');
}

console.log(sortArray('34251')) // '12345'
module.exports = sortArray;