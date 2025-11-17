function scanner(qr) {
  const N = 21;
  const bits = [];

  // Службові зони, які потрібно пропускати
  const isReserved = (r, c) => {
    const inTL = r < 9 && c < 9;
    const inTR = r < 9 && c >= N - 9;
    const inBL = r >= N - 9 && c < 9;
    const timing = r === 6 || c === 6;
    return inTL || inTR || inBL || timing;
  };

  // Читання даних по QR-патерну
  let col = N - 1;
  let row = N - 1;
  let dir = -1;

  while (col > 0 && bits.length < 76) {
    if (col === 6) col--; // пропустити колонку таймінгу

    for (let i = 0; i < 2; i++) {
      const c = col - i;
      if (!isReserved(row, c)) {
        let v = qr[row][c];

        // маска 0
        if ((row + c) % 2 === 0) v ^= 1;

        bits.push(v);
        if (bits.length === 76) break;
      }
    }

    row += dir;
    if (row < 0 || row >= N) {
      dir *= -1;
      row += dir;
      col -= 2;
    }
  }

  // 4 біти режиму — пропускаємо
  // Наступні 8 — довжина
  const msgLen = parseInt(bits.slice(4, 12).join(""), 2);

  let out = "";
  let p = 12;

  for (let i = 0; i < msgLen; i++) {
    const byte = parseInt(bits.slice(p, p + 8).join(""), 2);
    out += String.fromCharCode(byte);
    p += 8;
  }

  return out;
}


module.exports = scanner;