function stringParse(string){
    if (typeof string !== 'string') return 'Please enter a valid string'
  return string.replace(/([a-zA-Z])\1{2,}/g, match => {
  const firstTwo = match.slice(0, 2);
  const rest = match.slice(2);
  return firstTwo + "[" + rest + "]";
  })
}

console.log(stringParse('aaaabbcdefffffffg')) // 'aa[aa]bbcdeff[fffff]g'
module.exports = stringParse;