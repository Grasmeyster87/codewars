/* function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
} */
function find(a, el) {
  return a.indexOf(el) !== -1?a.indexOf(el):"Not found";
}

module.exports = find;