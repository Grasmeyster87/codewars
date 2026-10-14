ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13.

If there are nonletter characters in the string, they should be left as-is in the output. Only letters from the ASCII alphabet should be shifted, like in the original Rot13 "implementation".

<br> <hr> <br>

ROT13 — це простий шифр підстановки, який замінює літеру на ту, що стоїть в алфавіті на 13 позицій далі. ROT13 є різновидом шифру Цезаря.

Напишіть функцію, яка приймає рядок і повертає його, зашифрованим за допомогою алгоритму ROT13.

Якщо в рядку є символи, що не є літерами, вони мають залишатися без змін у вихідному рядку. Зсуву підлягають лише літери з набору ASCII, як в оригінальній «реалізації» ROT13.

### 🔹 Варіант 1
```js
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
```

**Як працює:**
- `a` — це "оригінальний алфавіт" (малий + великий).  
- `b` — це "зсунутий алфавіт" на 13 позицій.  
- `message.replace(/[a-z]/gi, ...)` знаходить усі букви.  
- Для кожної букви `c` шукається її позиція в `a` (`a.indexOf(c)`), і береться символ з тієї ж позиції в `b`.  
- Тобто фактично робиться **таблиця відповідності**: `a[i] → b[i]`.

👉 Це найпростіший спосіб — готова мапа символів.

---

### 🔹 Варіант 2
```js
function rot13(message) {
  var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
}
```

**Як працює:**
- Тут використовується один рядок `abc`, але він спеціально побудований так:  
  - спочатку весь алфавіт `a–z`,  
  - потім ще раз перші 13 букв `a–m`,  
  - те саме для великих.  
- Коли ми шукаємо `abc.indexOf(c)`, отримуємо позицію букви.  
- Додаємо `+13` і беремо символ з цієї позиції.  
- Завдяки тому, що рядок продовжений, не треба робити `% 26` — зсув завжди працює.

👉 Це хитрий трюк: дублювання частини алфавіту дозволяє уникнути модульного ділення.

---

### 🔹 Варіант 3
```js
function rot13(message){
  return message.replace(/[a-zA-Z]/g, function(match) {
    return String.fromCharCode(
      match.charCodeAt(0) + (match.toUpperCase().localeCompare('M') > 0 ? -13 : 13)
    );
  });
}
```

**Як працює:**
- `message.replace(/[a-zA-Z]/g, ...)` знаходить усі букви.  
- `match.charCodeAt(0)` → код букви.  
- Далі йде умовний вираз:  
  - `match.toUpperCase().localeCompare('M') > 0` перевіряє, чи буква **після 'M'** в алфавіті.  
  - Якщо так → віднімаємо 13 (`-13`).  
  - Якщо ні → додаємо 13 (`+13`).  
- Це дозволяє уникнути `% 26`, бо ми просто вирішуємо:  
  - букви від `'A'` до `'M'` зсуваємо вперед,  
  - букви від `'N'` до `'Z'` зсуваємо назад.

👉 Це більш "математичний" підхід: замість таблиці чи дублювання алфавіту використовується умовна логіка.

---

### ✨ Порівняння
| Варіант | Ідея | Плюси | Мінуси |
|---------|------|-------|--------|
| 1 | Таблиця відповідності | Простий, зрозумілий | Довгі рядки `a` і `b` |
| 2 | Дубльований алфавіт | Короткий код, без `%` | Трохи хитрий трюк, неочевидний |
| 3 | Умовна логіка | Елегантний, без додаткових рядків | Складніше зрозуміти новачку |