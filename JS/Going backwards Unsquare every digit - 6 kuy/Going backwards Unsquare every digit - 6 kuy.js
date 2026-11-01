// Квадрати цифр 0..9 -> відповідна цифра
const SQUARES = [
  ["0", "0"], ["1", "1"], ["4", "2"], ["9", "3"], ["16", "4"],
  ["25", "5"], ["36", "6"], ["49", "7"], ["64", "8"], ["81", "9"],
];

// Чи "a" менше за "b": спочатку за довжиною, потім лексикографічно
function isSmaller(a, b) {
  if (b === null) return true;
  if (a.length !== b.length) return a.length < b.length;
  return a < b;
}

function unsquareDigits(n) {
  const s = n.toString();
  if (s === "0") return 0n;

  const len = s.length;
  // best[i] — найменше початкове число для суфікса s[i..] (або null)
  const best = new Array(len + 1).fill(null);
  best[len] = "";

  for (let i = len - 1; i >= 0; i--) {
    for (const [sq, digit] of SQUARES) {
      if (!s.startsWith(sq, i)) continue;
      const rest = best[i + sq.length];
      if (rest === null) continue;
      // Початкове число не може починатися з нуля
      if (i === 0 && digit === "0") continue;

      const candidate = digit + rest;
      if (isSmaller(candidate, best[i])) best[i] = candidate;
    }
  }

  return best[0] === null ? null : BigInt(best[0]);
}

module.exports = unsquareDigits;