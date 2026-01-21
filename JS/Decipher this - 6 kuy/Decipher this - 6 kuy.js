function decipherThis(str) {
  return str.split(' ').map(word => {
    const codeMatch = word.match(/^\d+/);
    const charCode = codeMatch ? String.fromCharCode(codeMatch[0]) : '';
    let rest = word.slice(codeMatch[0].length);

    if (rest.length > 1) {
      let chars = rest.split('');
      // міняємо місцями перший і останній символ залишку
      [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];
      rest = chars.join('');
    }

    return charCode + rest;
  }).join(' ');
}

module.exports = decipherThis;