function service(score) {
  let [first, second] = score.split(':').map(Number);
  let total = first + second;

  if (first >= 20 && second >= 20) {
    // після 20:20 — кожні 2 очки
    return Math.floor(total / 2) % 2 === 0 ? "first" : "second";
  } else {
    // до 20:20 — кожні 5 очок
    return Math.floor(total / 5) % 2 === 0 ? "first" : "second";
  }
}

console.log(service('0:0')); // 'first'
console.log(service('21:22')); // 'second'

module.exports = service;
