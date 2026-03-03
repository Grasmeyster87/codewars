function snail(array) {
  const result = [];
  while (array.length) {
    // верхній рядок
    result.push(...array.shift());
    // правий стовпчик
    array.forEach(row => result.push(row.pop()));
    // нижній рядок
    if (array.length) result.push(...array.pop().reverse());
    // лівий стовпчик (знизу вгору!)
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }
  return result;
}

module.exports = snail;