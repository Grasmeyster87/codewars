function calculateAge(birthYear, year) {
  const diff = year - birthYear;
  if (diff === 0) return 'You were born this very year!';
  if (diff > 0) {
    return `You are ${diff} year${diff === 1 ? '' : 's'} old.`;
  }
  const yearsUntil = Math.abs(diff);
  return `You will be born in ${yearsUntil} year${yearsUntil === 1 ? '' : 's'}.`;
}

module.exports = calculateAge;
