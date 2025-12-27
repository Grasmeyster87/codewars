function clockHands(angle) {
  // Нормалізуємо кут у [0, 360)
  angle = ((angle % 360) + 360) % 360;

  const results = [];
  const diffPerSec = 11 / 120; // відносна швидкість (хвилинна - годинна), °/сек
  const eps = 1e-9;

  for (let k = 0; k < 11; k++) {
    // Час у секундах, коли (minuteAngle - hourAngle) = angle + 360*k
    // t = (angle + 360*k) / (11/120) = 120*(angle + 360*k)/11
    const timeSec = 120 * (angle + 360 * k) / 11;

    // Якщо точно на секунду — беремо її; якщо між секундами — меншу
    const totalSec = Math.floor(timeSec + eps);

    // Переводимо у години, хвилини, секунди
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;

    // Формат годин: 12 замість 00
    const hh = h % 12 === 0 ? 12 : h % 12;

    const formatted =
      String(hh).padStart(2, '0') + ':' +
      String(m).padStart(2, '0') + ':' +
      String(s).padStart(2, '0');

    results.push(formatted);
  }

  return results;
}



module.exports = clockHands;