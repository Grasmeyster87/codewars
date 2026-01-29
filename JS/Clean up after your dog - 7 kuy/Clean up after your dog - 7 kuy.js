function crap(garden, bags, cap){
  let count = 0;
  for (const row of garden) {
    for (const cell of row) {
      if (cell === 'D') return "Dog!!";
      if (cell === '@') count++;
    }
  }
  const totalCapacity = bags * cap;
  return totalCapacity >= count ? "Clean" : "Cr@p";
}

module.exports = crap;