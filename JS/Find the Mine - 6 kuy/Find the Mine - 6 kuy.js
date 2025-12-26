/* function mineLocation(field){
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] === 1){
                    return [i, j]
            }
        }
    }

  return null // your code here
} */

/* function mineLocation(field) {
  for (let i = 0; i < field.length; i++) {
    const j = field[i].indexOf(1);
    if (j !== -1) return [i, j];
  }
} */

function mineLocation(field) {
  const row = field.findIndex(r => r.includes(1));
  const col = field[row].indexOf(1);
  return [row, col];
}



module.exports = mineLocation;