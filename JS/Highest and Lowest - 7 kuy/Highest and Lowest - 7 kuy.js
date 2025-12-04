function highAndLow(numbers){
  return Math.max(...numbers.split(" ").map(Number)) + " " + Math.min(...numbers.split(" ").map(Number));
}

module.exports = highAndLow;