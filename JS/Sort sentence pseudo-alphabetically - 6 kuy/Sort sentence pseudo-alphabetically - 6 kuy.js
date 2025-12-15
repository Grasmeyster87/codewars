function sort(sentence) {
  // убираем пунктуацию
  let words = sentence.replace(/[^\w\s]|_/g, "").split(/\s+/).filter(Boolean);

  // маленькие буквы
  let small = words
    .filter(word => /^[a-z]/.test(word)) // проверяем только первую букву
    .sort((a, b) => a.localeCompare(b));

  // заглавные буквы
  let big = words
    .filter(word => /^[A-Z]/.test(word)) // проверяем только первую букву
    .sort((a, b) => b.localeCompare(a)); // сортировка по убыванию

  return [...small, ...big].join(" ");

}

module.exports = sort;
