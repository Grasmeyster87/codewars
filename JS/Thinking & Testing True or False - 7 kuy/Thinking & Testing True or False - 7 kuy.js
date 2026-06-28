function testit(n){
  const binary = n.toString(2);  
  const onesCount = binary.split('').filter(bit => bit === '1').length;  
  return  onesCount  
}

module.exports = testit;