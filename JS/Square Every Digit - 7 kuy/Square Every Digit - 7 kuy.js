function squareDigits(num){
    return Number(
    String(num)               // превращаем число в строку
      .split('')              // разбиваем на массив цифр
      .map(d => d ** 2)       // каждую цифру возводим в квадрат
      .join('')               // склеиваем обратно в строку
  );
}

module.exports = squareDigits;