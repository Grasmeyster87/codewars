function grille(message, code) {
  const n = message.length;
  if (n === 0) return "";

  // Двійковий запис коду, вирівняний по правому краю повідомлення:
  // зліва доповнюємо нулями, а зайві старші біти відкидаємо
  const bits = code.toString(2).padStart(n, "0").slice(-n);

  let result = "";
  for (let i = 0; i < n; i++) {
    if (bits[i] === "1") result += message[i];
  }
  return result;
}

// const grille = (m, c, a = "") => c ? grille(m.slice(0, -1), c >> 1, c & 1 ? m.slice(-1) + a : a) : a;

module.exports = grille;