/* String.prototype.camelCase = function() {
  return this.trim()
    .split(' ')
    .map(word => {
      if (word.length === 0) return '';
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}; */


String.prototype.camelCase = function () {
    return this.trim()
        .replace(/(?:^|\s)(\w)/g, (match, char) => char.toUpperCase())
        .replace(/\s/g, '');
};

console.log('Helo Banda'.camelCase());

// Экспорт функции как отдельной сущности (если нужно)
module.exports = function (str) {
  return str.camelCase();
};
