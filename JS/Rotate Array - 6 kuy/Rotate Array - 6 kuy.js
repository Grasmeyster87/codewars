function rotate(data, n) {
  if (data.length === 0) return data; // пустой массив остаётся пустым

  // нормализуем n, чтобы оно было в пределах длины массива
  n = n % data.length;

  if (n === 0) return data;

  if (n > 0) {
    for (let i = 0; i < n; i++) {
      let tempVal = data.pop();
      data.unshift(tempVal);
    }
  }

  if (n < 0) {
    for (let i = 0; i < Math.abs(n); i++) {
      let tempVal = data.shift();
      data.push(tempVal);
    }
  }

  return data;
}

module.exports = rotate;