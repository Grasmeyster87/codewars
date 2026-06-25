function findAB(numbers,c){
  let arr1 = [];
  if (numbers.length == 0) return null;
  for (let i = 0; i< numbers.length; i++){
    for (let j = 0; j < numbers.length; j++){
        if (numbers[i]*number[j] == c){
            arr1.push(numbers[i]);
            arr1.push(number[j])
        }
    }
  }
  return arr1
}
module.exports = findAB;