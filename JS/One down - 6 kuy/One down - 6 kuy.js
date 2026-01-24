function oneDown(str) {
  if (typeof str !== 'string') return 'Input is not a string';

  let res = '';
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const code = ch.charCodeAt(0);

    // Uppercase A-Z
    if (code >= 65 && code <= 90) {
      res += code === 65 ? 'Z' : String.fromCharCode(code - 1);
    }
    // Lowercase a-z
    else if (code >= 97 && code <= 122) {
      res += code === 97 ? 'z' : String.fromCharCode(code - 1);
    }
    // Other characters unchanged
    else {
      res += ch;
    }
  }

  return res;

}

module.exports = oneDown;