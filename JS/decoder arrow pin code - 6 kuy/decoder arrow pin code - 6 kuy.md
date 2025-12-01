<div class="description-content p-4">
                <div class="markdown prose max-w-none mb-8" id="description"><h2 id="description">Description</h2>
<p>You are a junior employee hired to work in an office for a meager salary, but you are full of ambition to conquer the  <del>universe</del>  of professional heights. You were shown your workplace, which has a computer, but it is password protected. Your coworkers decided to play a joke on you by setting a password on your computer. They left you a bunch of stickers with a strange sequence of characters, always starting with a digit and continuing with arrows. Some stickers have an additional digit starting with *. Taking one sticker in your hands and looking at the keyboard, you realize that this is probably the computer's PIN code, encoded as a sequence of arrows, but which of the stickers contains the correct sequence? It seems that among the stickers there are impossible combinations of arrows that go beyond the limits of the numeric keypad.  You try to enter the first PIN code from the sticker, get confused by the arrows, and decide to write a function to decode the PIN code with arrows. Fortunately, you have your laptop with you.</p>
<pre><code>
+---+---+---+     +---sticker---+ 
| 7 | 8 | 9 |     |             |
+---+---+---+     |  1→↑→       |
| 4 | 5 | 6 |     |             |
+---+---+---+     |             |
| 1 | 2 | 3 |     +-------------+
+---+---+---+   presumably encoded
| 0 |                1256
+---+
</code></pre>
<h2 id="task">Task</h2>
<p>Your task is to write a decoder function for the arrow pin code that takes a string as input and
returns a list containing a sequence of digits.</p>
<ul>
<li>The sticker contains between 4 and 8 characters.</li>
<li>The PIN code on the sticker always begins with a digit and contains at least one arrow.</li>
<li>There are no more than four types of arrows on the stickers
<code>↓, ↑, →, ←</code>.</li>
<li>In addition to the first digit, the sticker may contain another digit with an asterisk *n, which probably indicates the number of times the previous key was pressed. The digit is always in the range 0 &lt; *n &lt; 10.</li>
<li>The sticker may contain an incorrect PIN code consisting of an incorrect combination of arrows that goes beyond the digital keypad. In this case, return [].</li>
</ul>
<h2 id="examples">Examples</h2>
<p>correct sequence of arrows</p>
<ul>
<li><code>"1→↑→"       ==&gt;   [1, 2, 5, 6]</code></li>
<li><code>"1*2↓"       ==&gt;   [1, 1, 1, 0]</code></li>
<li><code>"0*2↑"       ==&gt;   [0, 0, 0, 1]</code></li>
<li><code>"0↑↑↑"       ==&gt;   [0, 1, 4, 7]</code></li>
<li><code>"5↓*1←↑↓"    ==&gt;   [5, 2, 2, 1, 4, 1]</code></li>
<li><code>"1→→↑↑←←↓↓"  ==&gt;   [1, 2, 3, 6, 9, 8, 7, 4, 1]</code></li>
</ul>
<p>incorrect sequence of arrows</p>
<ul>
<li><code>"0↑↑↑↑"      ==&gt;   []</code></li>
<li><code>"8↑*5→"      ==&gt;   []</code></li>
<li><code>"0←*2←"      ==&gt;   []</code></li>
<li><code>"8↑↑↑"       ==&gt;   []</code></li>
<li><code>"3↓←*4↑"     ==&gt;   []</code></li>
<li><code>"6→←→↓↑"     ==&gt;   []</code></li>
</ul>
</div>
                  <hr>
                  <div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Algorithms</div><div class="keyword-tag">Logic</div><div class="keyword-tag">Strings</div></div>
              </div>

<div class="description-content p-4">
<div class="markdown prose max-w-none mb-8" id="description"><h2 id="description">Описание</h2>
<p>Вы — младший сотрудник, нанятый в офис на мизерную зарплату, но полны амбиций покорить <del>вселенную</del> профессиональных высот. Вам показали ваше рабочее место, где есть компьютер, но он запаролен. Ваши коллеги решили подшутить над вами, установив пароль на ваш компьютер. Они оставили вам кучу наклеек со странной последовательностью символов, всегда начинающейся с цифры и продолжающейся стрелками. На некоторых наклейках есть дополнительная цифра, начинающаяся с *. Взяв одну наклейку в руки и взглянув на клавиатуру, вы понимаете, что это, вероятно, PIN-код компьютера, закодированный в виде последовательности стрелок, но какая из наклеек содержит правильную последовательность? Похоже, на наклейках встречаются невозможные комбинации стрелок, выходящие за пределы цифровой клавиатуры. Вы пытаетесь ввести первый PIN-код с наклейки, путаетесь в стрелках и решаете написать функцию для расшифровки PIN-кода с помощью стрелок. К счастью, у вас с собой ноутбук.</p>
<pre><code>
+---+---+---+     +---sticker---+ 
| 7 | 8 | 9 |     |             |
+---+---+---+     |  1→↑→       |
| 4 | 5 | 6 |     |             |
+---+---+---+     |             |
| 1 | 2 | 3 |     +-------------+
+---+---+---+   presumably encoded
| 0 |                1256
+---+
</code></pre>
<h2 id="task">Задача</h2>
<p>Ваша задача — написать функцию-декодер пин-кода стрелки, которая принимает строку на вход и
возвращает список, содержащий последовательность цифр.</p>
<ul>
<li>Наклейка содержит от 4 до 8 символов.</li>
<li>ПИН-код на наклейке всегда начинается с цифры и содержит как минимум одну стрелку.</li>
<li>На наклейках может быть не более четырёх типов стрелок:
<code>↓, ↑, →, ←</code>.</li>
<li>Помимо первой цифры, наклейка может содержать ещё одну цифру со звёздочкой *n, которая, вероятно, указывает количество нажатий предыдущей клавиши. Цифра всегда находится в диапазоне 0 < *n < 10.</li>
<li>Наклейка может содержать неверный PIN-код, состоящий из неверной комбинации стрелок, выходящей за пределы цифровой клавиатуры. В этом случае верните [].</li>
</ul>
<h2 id="examples">Примеры</h2>
<p>правильная последовательность стрелок</p>
<ul>
<li><code>"1→↑→" ==&gt; [1, 2, 5, 6]</code></li>
<li><code>"1*2↓" ==&gt; [1, 1, 1, 0]</code></li>
<li><code>"0*2↑" ==&gt; [0, 0, 0, 1]</code></li>
<li><code>"0↑↑↑" ==&gt; [0, 1, 4, 7]</code></li>
<li><code>"5↓*1←↑↓" ==&gt; [5, 2, 2, 1, 4, 1]</code></li>
<li><code>"1→→↑↑←←↓↓" ==&gt; [1, 2, 3, 6, 9, 8, 7, 4, 1]</code></li>
</ul>
<p>неправильная последовательность стрелок</p>
<ul>
<li><code>"0↑↑↑↑" ==&gt; []</code></li>
<li><code>"8↑*5→" ==&gt; []</code></li>
<li><code>"0←*2←" ==&gt; []</code></li>
<li><code>"8↑↑↑" ==&gt; []</code></li>
<li><code>"3↓←*4↑" ==&gt; []</code></li>
<li><code>"6→←→↓↑" ==&gt; []</code></li>
</ul>
</div>
<hr>
<div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Алгоритмы</div><div class="keyword-tag">Логика</div><div class="keyword-tag">Строки</div></div>
</div>


**Organizing line-by-line explanation**

The user wants a detailed description of each line, so I think numbering the code lines directly within the code block is the way to go. I’ll prefix numbers as comments, which seems clean and clear. I can then explain each line by mapping it to the numbers. It’ll look neat if I use bold lead-in labels, like “**Line X:**”, followed by the description. This approach should make it easy to understand. Alright, I’ve got a plan!
### Докладний опис кожної строчки коду

```js
function decArrowPinCode(arrowStr) {
  // Мапа цифр на координати (row, col)
  const keypad = {
    7: [0, 0], 8: [0, 1], 9: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    1: [2, 0], 2: [2, 1], 3: [2, 2],
    0: [3, 0] // <-- виправлено: 0 під 1
  };

  // Зворотна мапа координат -> цифра
  const coordToDigit = {};
  for (let d in keypad) {
    const [r, c] = keypad[d];
    coordToDigit[`${r},${c}`] = Number(d);
  }

  // Напрямки
  const moves = {
    '↑': [-1, 0],
    '↓': [1, 0],
    '←': [0, -1],
    '→': [0, 1]
  };

  // Початкова цифра
  let i = 0;
  if (!/^\d/.test(arrowStr)) return [];
  let result = [];
  let currentDigit = Number(arrowStr[i]);
  result.push(currentDigit);
  let [row, col] = keypad[currentDigit];
  i++;

  while (i < arrowStr.length) {
    if (arrowStr[i] === '*') {
      i++;
      let n = Number(arrowStr[i]);
      if (!(n > 0 && n < 10)) return [];
      // додаємо ще n повторів поточної цифри
      for (let k = 0; k < n; k++) {
        result.push(currentDigit);
      }
      i++;
    } else {
      let arrow = arrowStr[i];
      if (!(arrow in moves)) return [];
      let [dr, dc] = moves[arrow];
      row += dr;
      col += dc;
      if (coordToDigit[`${row},${col}`] === undefined) return [];
      currentDigit = coordToDigit[`${row},${col}`];
      result.push(currentDigit);
      i++;
    }
  }

  return result;
}

module.exports = decArrowPinCode;
```

---

#### Оголошення функції та вхідні дані

- **function decArrowPinCode(arrowStr) {**  
  Оголошуємо функцію з ім’ям decArrowPinCode, яка приймає рядок arrowStr — наклейку з цифрами, стрілками та, можливо, блоками типу *n.

---

#### Мапа клавіатури

- **// Мапа цифр на координати (row, col)**  
  Коментар: пояснює, що наступний об’єкт зіставляє цифри з координатами рядок/стовпець.

- **const keypad = { ... };**  
  Створює об’єкт, де кожній цифрі відповідає пара координат. Це модель цифрової клавіатури: 7–9, 4–6, 1–3, і 0 під 1.

---

#### Зворотна мапа координат у цифру

- **// Зворотна мапа координат -> цифра**  
  Коментар: пояснює призначення наступної структури.

- **const coordToDigit = {};**  
  Ініціалізує порожній об’єкт для швидкого пошуку цифри за координатами.

- **for (let d in keypad) {**  
  Початок циклу по всіх цифрах у keypad.

- **const [r, c] = keypad[d];**  
  Деструктуризує координати рядка r та стовпця c для цифри d.

- **coordToDigit[`${r},${c}`] = Number(d);**  
  Зберігає у зворотній мапі цифру за ключем-рядком "r,c". Number(d) перетворює ключ рядка в число.

- **}**  
  Закриває цикл побудови зворотної мапи.

---

#### Опис напрямків руху

- **// Напрямки**  
  Коментар: далі задаємо вектори зміщення для стрілок.

- **const moves = { '↑': [-1, 0], '↓': [1, 0], '←': [0, -1], '→': [0, 1] };**  
  Об’єкт зі зміщеннями по рядках і стовпцях для кожної стрілки: вгору мінус рядок, вниз плюс рядок, вліво мінус стовпець, вправо плюс стовпець.

---

#### Ініціалізація парсингу

- **// Початкова цифра**  
  Коментар: починаємо читати першу цифру й готуємося до обробки.

- **let i = 0;**  
  Індекс поточної позиції в рядку arrowStr.

- **if (!/^\d/.test(arrowStr)) return [];**  
  Перевіряє, що рядок починається з цифри; якщо ні — повертає порожній масив, бо формат некоректний.

- **let result = [];**  
  Масив результату — послідовність цифр PIN-коду.

- **let currentDigit = Number(arrowStr[i]);**  
  Зчитує перший символ як число — стартову цифру.

- **result.push(currentDigit);**  
  Додає стартову цифру до результату (перше натискання вже відбулося).

- **let [row, col] = keypad[currentDigit];**  
  Отримує координати рядка та стовпця для стартової цифри.

- **i++;**  
  Переходить до наступного символу після стартової цифри.

---

#### Основний цикл обробки символів

- **while (i < arrowStr.length) {**  
  Обробляє решту рядка, поки не досягнемо кінця.

- **if (arrowStr[i] === '*') {**  
  Якщо поточний символ — зірочка, обробляємо блок повторення.

- **i++;**  
  Переходимо до цифри після зірочки.

- **let n = Number(arrowStr[i]);**  
  Зчитуємо кількість повторів n.

- **if (!(n > 0 && n < 10)) return [];**  
  Валідатор: n має бути в діапазоні 1–9; інакше повертаємо порожній масив.

- **// додаємо ще n повторів поточної цифри**  
  Коментар: пояснює наступний цикл.

- **for (let k = 0; k < n; k++) { result.push(currentDigit); }**  
  Додає поточну цифру до результату ще n разів (додаткові натискання тієї ж клавіші).

- **i++;**  
  Рухається далі після цифри n.

- **} else {**  
  Якщо це не блок повторення, очікуємо стрілку.

- **let arrow = arrowStr[i];**  
  Зберігає поточну стрілку в змінній.

- **if (!(arrow in moves)) return [];**  
  Перевіряє, що символ є однією з дозволених стрілок; інакше формат некоректний.

- **let [dr, dc] = moves[arrow];**  
  Отримує вектор зміщення для цієї стрілки.

- **row += dr;**  
  Змінює рядок відповідно до напряму.

- **col += dc;**  
  Змінює стовпець відповідно до напряму.

- **if (coordToDigit[`${row},${col}`] === undefined) return [];**  
  Перевіряє, що нові координати існують на клавіатурі; якщо ні — рух поза межами, повертаємо порожній масив.

- **currentDigit = coordToDigit[`${row},${col}`];**  
  Оновлює поточну цифру за новими координатами.

- **result.push(currentDigit);**  
  Додає цю цифру до результату як чергове натискання.

- **i++;**  
  Переходить до наступного символу.

- **}**  
  Закриває гілку обробки стрілок.

- **}**  
  Закриває цикл while.

---

#### Завершення і експорт

- **return result;**  
  Повертає масив розшифрованих цифр PIN-коду.

- **}**  
  Закриває оголошення функції.

- **module.exports = decArrowPinCode;**  
  Експортує функцію для використання в інших файлах і тестах.
