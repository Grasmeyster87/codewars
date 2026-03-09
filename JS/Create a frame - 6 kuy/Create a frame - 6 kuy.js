/* const frame = (text, char) => {
    let textLong = 0;
    let stringRes = '';

    for (el of text) {
        if (el.length > textLong) {
            textLong = el.length;
        }
    }

    textLong += 4;

    function charSet(char, textLong) {
        let line = '';
        for (let i = 0; i < textLong; i++) {
            line += char;
        }
        return line;
    }

    stringRes += charSet(char, textLong);

    function wordinsert(text, char) {
        let words = '';
        for (el of text) {
            words +=
                '\n' + char + ' ' + el.padEnd(textLong - 4, ' ') + ' ' + char;
        }
        return words + '\n';
    }

    stringRes += wordinsert(text, char);
    stringRes += charSet(char, textLong);
    return stringRes;
}; */

const frame = (text, char) => {
  const textLong = Math.max(...text.map(el => el.length));
  const border = char.repeat(textLong + 4);
  const body = text.map(el => 
    `${char} ${el.padEnd(textLong, ' ')} ${char}`
  ).join('\n');
  return `${border}\n${body}\n${border}`;
};


console.log(frame(['Small', 'frame'], '~'));
console.log(frame(['Create', 'this', 'kata'], '+'));
console.log(frame(['This is a very long single frame'], '-'));

module.exports = frame;
