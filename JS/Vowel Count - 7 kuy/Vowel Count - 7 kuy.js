/*function getCount(str) {
  let count = 0;
  for(let i=0; i < str.length; i++){
    str.split('')
    count++;
  }
  return count;
}*/

function getCount(str) {
  const matches = str.match(/[aeiou]/g);
  return matches ? matches.length : 0;
}

module.exports = getCount;