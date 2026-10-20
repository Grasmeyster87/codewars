const crypto = require('crypto');

function sha256(str) {
  return crypto.createHash('sha256').update(str).digest('hex');
}

// Генератор перестановок Хіпа (Heap's algorithm).
// Не будує масив усіх перестановок одразу, а віддає їх по одній через yield —
// це дозволяє перервати перебір одразу, як тільки знайдено збіг хешу.
function* permutations(arr) {
  const n = arr.length;
  const c = new Array(n).fill(0);
  yield arr.slice();

  let i = 0;
  while (i < n) {
    if (c[i] < i) {
      if (i % 2 === 0) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
      } else {
        [arr[c[i]], arr[i]] = [arr[i], arr[c[i]]];
      }
      yield arr.slice();
      c[i]++;
      i = 0;
    } else {
      c[i] = 0;
      i++;
    }
  }
}

function sha256Cracker(hash, chars) {
  const letters = chars.split('');

  for (const perm of permutations(letters)) {
    const candidate = perm.join('');
    if (sha256(candidate) === hash) {
      return candidate;
    }
  }

  return null;
}

module.exports = sha256Cracker;