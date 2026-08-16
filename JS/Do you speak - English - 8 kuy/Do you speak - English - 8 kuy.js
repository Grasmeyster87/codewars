function spEng(sentence) {
  // Переводимо рядок у нижній регістр і перевіряємо наявність слова "english"
  return sentence.toLowerCase().includes("english");
}

module.exports = spEng;
