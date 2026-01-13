function exchangeWith(a, b) {
  const aRev = [...a].reverse();
  const bRev = [...b].reverse();
  
  a.length = 0;
  b.length = 0;
  
  for (let i = 0; i < bRev.length; i++) {
    a.push(bRev[i]);
  }
  
  for (let i = 0; i < aRev.length; i++) {
    b.push(aRev[i]);
  }
  
  return [a, b];
}

const a = ['1', '2', '3', '4', '5', '6', '7'];
const b = ['a', 'b', 'c'];

console.log(exchangeWith(a, b));
module.exports = exchangeWith;