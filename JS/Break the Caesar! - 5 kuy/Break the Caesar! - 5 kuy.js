function breakCaesar(st){
    // 1. Отримуємо масив слів, ігноруючи все, що не є літерами
  const wordsInMsg = st.toLowerCase().match(/[a-z]+/g) || [];
  
  let bestShift = 0;
  let maxMatches = -1;

  // 2. Тестуємо кожен можливий зсув від 0 до 25
  for (let shift = 0; shift < 26; shift++) {
    let currentMatches = 0;

    for (let word of wordsInMsg) {
      let decryptedWord = "";

      for (let char of word) {
        // Перетворюємо символ у код 0-25 (a=0, b=1...)
        let code = char.charCodeAt(0) - 97;
        // Зсуваємо назад
        let shiftedCode = (code - shift) % 26;
        // Обробка від'ємних значень у JS (напр. -1 % 26 = -1, а нам треба 25)
        if (shiftedCode < 0) shiftedCode += 26;
        
        decryptedWord += String.fromCharCode(shiftedCode + 97);
      }

      // 3. Перевіряємо наявність слова у словнику WORDS
      if (WORDS.has(decryptedWord)) {
        currentMatches++;
      }
    }

    // 4. Оновлюємо найкращий результат
    if (currentMatches > maxMatches) {
      maxMatches = currentMatches;
      bestShift = shift;
    }
  }

  return bestShift;
}


module.exports = breakCaesar;