function numberToOrdinal(n) {
  if (n == 0) return '0';
  let s = ['th', 'st', 'nd', 'rd'];

  let ns = n.toString();
  
  let last_2 = parseInt(ns.slice(-2));
  let last_1 = parseInt(ns.slice(-1));
     
  if(last_2 >= 11 && last_2 <=13){
    return n + s[0];
  }    
  return n + (last_1 == 1 ? 'st' : last_1 == 2 ? 'nd' : last_1 == 3 ? 'rd' : 'th');
}

module.exports = numberToOrdinal;