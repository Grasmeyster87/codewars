function luckCheck(ticket) {
  if (!ticket || typeof ticket !== 'string') {
    throw new Error('Invalid input');
  }

  // Перевірка, що всі символи — цифри
  if (!/^\d+$/.test(ticket)) {
    throw new Error('Invalid input');
  }

  const len = ticket.length;
  const half = Math.floor(len / 2);

  let left, right;

  if (len % 2 === 0) {
    // парна довжина
    left = ticket.slice(0, half);
    right = ticket.slice(half);
  } else {
    // непарна довжина — ігноруємо середню цифру
    left = ticket.slice(0, half);
    right = ticket.slice(half + 1);
  }

  const sumDigits = str => [...str].reduce((acc, d) => acc + Number(d), 0);

  return sumDigits(left) === sumDigits(right);
}

module.exports = luckCheck;