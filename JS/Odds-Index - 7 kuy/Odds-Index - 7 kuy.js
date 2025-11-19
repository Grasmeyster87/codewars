function oddBall(arr) {
  // находим индекс слова "odd"
  const oddIndex = arr.indexOf("odd");
  // проверяем, есть ли такое число в массиве
  return arr.includes(oddIndex);
}

module.exports = oddBall;