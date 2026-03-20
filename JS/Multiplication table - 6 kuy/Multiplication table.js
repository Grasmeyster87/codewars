/*function multiplicationTable(size) {
  const result = [];

  for (let i = 1; i <= size; i++) {
    const row = [];

    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }

    result.push(row);
  }

  return result;
}
*/
const multiplicationTable = size =>
  Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => (i + 1) * (j + 1))
  );
module.exports = multiplicationTable;