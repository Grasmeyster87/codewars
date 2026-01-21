var encryptThis = function(text) {
  if (text === '') return '';
  return text.split(' ').map(function(word) {
    if (word.length === 0) return '';
    var firstCode = word.charCodeAt(0);
    if (word.length === 1) return '' + firstCode;
    if (word.length === 2) return firstCode + word[1];
    // length >= 3
    return firstCode + word[word.length - 1] + word.slice(2, -1) + word[1];
  }).join(' ');
}

module.exports = encryptThis;