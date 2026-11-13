function identifyBB(bearings, weigh) {
  const batch = [];
  bearings.forEach((bearing, i) => {
    for (let k = 0; k < i; k++) batch.push(bearing);
  });

  const excess = weigh(...batch) - 10 * batch.length;
  return bearings[excess];
}

module.exports = identifyBB;