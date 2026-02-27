// return an array of numbers (that are a power of 2)
// for which the input "n" is the sum
const powers = n => {
  const result = [];
  let power = 1;

  while (power <= n) {
    if (Math.floor(n / power) % 2 === 1) {
      result.push(power);
    }
    power *= 2;
  }
  return result;
};

module.exports = powers;