function incrementString(strng) {
  // Ищем цифры в конце
  const match = strng.match(/^(.*?)(\d+)?$/);
  const letters = match[1]; // текстовая часть
  const dgt = match[2] || ""; // цифры (если есть)

  if (dgt === "") {
    // если цифр нет — добавляем "1"
    return letters + "1";
  } else {
    // увеличиваем число
    const num = String(+dgt + 1).padStart(dgt.length, "0");
    return letters + num;
  }
}

//let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)

let res1 = incrementString('fo99obar99'); // 'fo99obar100'
let res2 = incrementString('foo'); // 'foo1'

console.log(res1);
console.log(res2);

module.exports = incrementString;
