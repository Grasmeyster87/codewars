function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

/*
function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .filter(ch => !vowels.includes(ch.toLowerCase()))
    .join("");
}
*/

module.exports = disemvowel;