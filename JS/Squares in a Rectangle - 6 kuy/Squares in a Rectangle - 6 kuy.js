function findSquares(x,y){
  let counter = 0;

  // Перебираємо всі можливі розміри квадратів
  for (let k = 1; k <= y; k++) {
    counter += (x - k + 1) * (y - k + 1);
  }

  return counter;
}

module.exports = findSquares;