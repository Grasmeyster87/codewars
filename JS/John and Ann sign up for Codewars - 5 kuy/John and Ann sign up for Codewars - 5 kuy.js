function build(n) {
  if (n <= 0) return { a: [], j: [] };
  const a = new Array(n);
  const j = new Array(n);
  a[0] = 1;
  j[0] = 0;
  for (let i = 1; i < n; i++) {
    // сначала вычисляем j[i], затем a[i]
    j[i] = i - a[j[i - 1]];
    a[i] = i - j[a[i - 1]];
  }
  return { a, j };
}

function john(n) {
  return build(n).j;
}

function ann(n) {
  return build(n).a;
}

function sumJohn(n) {
  if (n <= 0) return 0;
  const j = build(n).j;
  let s = 0;
  for (let i = 0; i < j.length; i++) s += j[i];
  return s;
}

function sumAnn(n) {
  if (n <= 0) return 0;
  const a = build(n).a;
  let s = 0;
  for (let i = 0; i < a.length; i++) s += a[i];
  return s;
}

module.exports = { john, ann, sumJohn, sumAnn };