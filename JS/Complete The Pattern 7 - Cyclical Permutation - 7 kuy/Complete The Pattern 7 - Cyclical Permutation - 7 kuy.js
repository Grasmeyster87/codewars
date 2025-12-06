function pattern(n) {
 // если n <= 0 → пустая строка
  if (n <= 0) return "";

  let result = [];

  // первая строка: числа от 1 до n
  let base = Array.from({ length: n }, (_, i) => i + 1);

  for (let i = 0; i < n; i++) {
    // создаём строку, начиная с i-го элемента
    let row = base.slice(i).concat(base.slice(0, i));
    result.push(row.join("")); // без пробелов
  }

  // соединяем строки через перенос строки
  return result.join("\n");

}

module.exports = pattern;
