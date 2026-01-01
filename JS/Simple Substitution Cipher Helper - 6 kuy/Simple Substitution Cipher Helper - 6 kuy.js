class SubstitutionCipher {
  constructor(abc1, abc2) {
    this.abc1 = abc1;
    this.abc2 = abc2;
  }

  encode(str) {
    return str.split('').map(ch => {
      let idx = this.abc1.indexOf(ch);
      return idx !== -1 ? this.abc2[idx] : ch;
    }).join('');
  }

  decode(str) {
    return str.split('').map(ch => {
      let idx = this.abc2.indexOf(ch);
      return idx !== -1 ? this.abc1[idx] : ch;
    }).join('');
  }
}

// Приклад використання:
var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new SubstitutionCipher(abc1, abc2);

console.log(sub.encode("abc"));    // "eta"
console.log(sub.encode("xyz"));    // "qxz"
console.log(sub.encode("aeiou"));  // "eirfg"

console.log(sub.decode("eta"));    // "abc"
console.log(sub.decode("qxz"));    // "xyz"
console.log(sub.decode("eirfg"));  // "aeiou"
module.exports = SubstitutionCipher;