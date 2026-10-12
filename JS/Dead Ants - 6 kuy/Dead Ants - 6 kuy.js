function deadAntCount(ants) {
  if (ants === null || ants === undefined) {
    return 0;
  }

  const rest = ants.replace(/ant/g, '');

  const countOf = (ch) => rest.split(ch).length - 1;

  return Math.max(countOf('a'), countOf('n'), countOf('t'));
}

module.exports = deadAntCount;