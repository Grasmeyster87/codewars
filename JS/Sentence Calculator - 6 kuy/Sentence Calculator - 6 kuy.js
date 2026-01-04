function lettersToNumbers(s) {
  let arr1 = s.split('');
  let sum = 0;

  for (let ch of arr1) {
    if (ch >= 'a' && ch <= 'z') {
      // нижній регістр: позиція в алфавіті
      sum += ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    } else if (ch >= 'A' && ch <= 'Z') {
      // верхній регістр: подвійне значення
      sum += (ch.charCodeAt(0) - 'A'.charCodeAt(0) + 1) * 2;
    } else if (ch >= '0' && ch <= '9') {
      // цифри
      sum += Number(ch);
    } else {
      // інші символи
      sum += 0;
    }
  }

  return sum;
}



console.log(lettersToNumbers('ARE YOU HUNGRY?')); // 356

module.exports = lettersToNumbers;