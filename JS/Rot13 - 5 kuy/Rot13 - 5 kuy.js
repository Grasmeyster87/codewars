function rot13(message) {
    //Розбиваємо слово на массив букв
    return message
        .split('')
        .map((char) => {
            // Беремо код символа
            let code = char.charCodeAt(0);

            // Для латиниці: A-Z (65-90), a-z (97-122)
            if (code >= 65 && code <= 90) {
                // Зсув на 13 з циклом
                return String.fromCharCode(((code - 65 + 13) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + 13) % 26) + 97);
            } else {
                // Інші символи залишаємо як є
                return char;
            }
        })
        .join('');
}

/*
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

function rot13(message) {
  var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
}

function rot13(message){
  return message.replace(/[a-zA-Z]/g, function(match) {
    return String.fromCharCode(match.charCodeAt(0) + (match.toUpperCase().localeCompare('M') > 0 ? -13 : 13));
  });
}
*/
console.log(rot13('test')); // 'grfg'
module.exports = rot13;
