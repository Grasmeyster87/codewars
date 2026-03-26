// weights array - is golden ore pieces weights
// n - is the weight of figurine
//
// return an array describing the left and right scale pans, 
// prepared to test that the figurine (possibly weighing n) 
// placed on the right pan afterward will balance the scales
/*function weightN(weights,n) {
  
  // for this example, let's assume there are at least 3 ore pieces
  
  const left = [weights[0],weights[2]];
  const right = [weights[1]];
  
  return [left, right];
}*/

function weightN(weights, N) {
  const n1 = weights.length;

  function backtrack(i, left, right, sumL, sumR) {
    // базовий випадок
    if (i === n1) {
      if (sumL === sumR + N) {
        return [left.slice(), right.slice()];
      }
      return null;
    }

    const w = weights[i];

    // 1. кладемо в left
    left.push(w);
    let res = backtrack(i + 1, left, right, sumL + w, sumR);
    if (res) return res;
    left.pop();

    // 2. кладемо в right
    right.push(w);
    res = backtrack(i + 1, left, right, sumL, sumR + w);
    if (res) return res;
    right.pop();

    // 3. не використовуємо
    return backtrack(i + 1, left, right, sumL, sumR);
  }

  const result = backtrack(0, [], [], 0, 0);
  return result || [];
}

module.exports = weightN;