function removeParentheses(s){
  while (/\([^()]*\)/.test(s)) {
    s = s.replace(/\([^()]*\)/g, '');
  }
  return s;
}
module.exports = removeParentheses;