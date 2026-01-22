function mostMoney(students) {
  if (!students || students.length === 0) return "all";
  if (students.length === 1) return students[0].name;

  const totals = students.map(s => s.fives * 5 + s.tens * 10 + s.twenties * 20);

  const uniqueTotals = new Set(totals);
  if (uniqueTotals.size === 1) return "all";

  let maxIndex = 0;
  for (let i = 1; i < totals.length; i++) {
    if (totals[i] > totals[maxIndex]) maxIndex = i;
  }

  return students[maxIndex].name;
}

module.exports = mostMoney;