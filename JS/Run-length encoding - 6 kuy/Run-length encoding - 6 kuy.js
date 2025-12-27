var runLengthEncoding = function (str) {
  let s = [];
  let seen = new Set(); // множество для отслеживания уже добавленных символов

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!seen.has(char)) { // если символ ещё не встречался
      let count = str.split('').filter(el => el === char).length;
      s.push([count, char]);
      seen.add(char); // помечаем как обработанный
    }
  }
  return s;
};

var runLengthEncoding = function (str) {
  let s = [];
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      s.push([count, str[i - 1]]);
      count = 1;
    }
  }

  return s;
};



let str = 'hello world!'
console.log(runLengthEncoding(str));
module.exports = runLengthEncoding;