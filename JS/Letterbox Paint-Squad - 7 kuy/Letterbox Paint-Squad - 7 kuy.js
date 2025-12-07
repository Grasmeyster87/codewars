var paintLetterboxes = function(start, end) {
const counts = Array(10).fill(0);

  for (let i = start; i <= end; i++) {
    String(i).split('').forEach(d => {
      counts[parseInt(d, 10)]++;
    });
  }
  return counts;
}


console.log(paintLetterboxes(125, 132))
module.exports = paintLetterboxes;
