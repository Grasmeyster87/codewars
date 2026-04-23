N-Parasitic Numbers Ending in N
<div class="markdown prose max-w-none mb-8" id="description"><p>This challenge is to compute a special set of <a href="https://en.wikipedia.org/wiki/Parasitic_number" data-turbolinks="false" target="_blank">parasitic numbers</a> for various number bases.</p>
<blockquote>
<p>An n-parasitic number (in base 10) is a positive natural number which can be multiplied by <code>n</code> by moving the rightmost digit of its decimal representation to the front. Here <code>n</code> is itself a single-digit positive natural number. In other words, the decimal representation undergoes a right circular shift by one place. For example, 4 • 128205 = 512820, so 128205 is 4-parasitic</p>
</blockquote>
<h3 id="special-parasitic-numbers">Special Parasitic Numbers</h3>
<p>For some <code>N</code> there may be multiple N-parasitic numbers. This kata is concerned with finding a special set of n-parasitic numbers where the trailing digit is also the <code>N</code> in the N-parasitic number. In base-10, the above Wikipedia excerpt shows that 128205 is 4-parasitic since 4 • 128205 = 512820; however, the special number this Kata is looking for is the smallest 4-parasitic number that also ends in 4, which is 102564: 4 • 102564 = 410256.</p>
<h4 id="a-clarifying-anti-example">A Clarifying Anti-Example</h4>
<p>The "ending in N" portion of the requirements seems easily missed. While 5 • 142857 = 714285, this 142857 number is parasitic but it is <em>not</em> the number sought by this kata because it ends with a 7 in the ones' place rather than 'n' (which is 5 in this case).</p>
<pre><code>         v--- kata requires this digit to be 5 for n = 5
5 • 142857 = 714285
             ^--- kata requires this digit to be 5 for n = 5
</code></pre>
<p>While the product happens to end with a 5 in the one's place, that ends-with-N requirement is on the multiplicand <em>not</em> on the product. The answer sought is much bigger than 142857 for n = 5.</p>
<h3 id="challenge">Challenge</h3>
<p>Provide a method accepting two arguments: the special trailing digit and a number base. Your method should return the string representation of the smallest integer having the special parasitic number property as described above in the requested number-base (octal, decimal and hex.) Each number base will test for all trailing digits other than 0 and 1, giving a total of 28 test cases.</p>
<h3 id="why-the-smallest">Why the smallest?</h3>
<p>Consider how the special 4-parastic HEX number ending in 4 is 104. </p>
<p><code>104 Hex • 4 = 410 Hex.</code></p>
<p>Repeating <code>104</code> twice and multiplying by 4 gives us <code>104104 Hex • 4 = 410410 Hex</code>. This property holds regardless of how many times the set of digits is repeated (e.g., <code>104104 Hex • 4 = 410410 Hex, 104104104 Hex • 4 = 410410410 Hex, 104104104104 Hex • 4 = 410410410410 Hex, ...</code>), leading to an infinite set of these special numbers in each case. Your task is to find only the smallest number that satisfies the special parasitic property (this fact is a hint on one possible way to solve this problem).</p>
<h3 id="hints">Hints:</h3>
<ul>
<li>Unless you can be clever about it, brute force techniques probably won't work.</li>
<li>An answer exists satisfying the criteria for each of the trailing-digits tested.</li>
<li>Leading zero-digits are not allowed.</li>
<li>Test failures will not reveal expected values.</li>
</ul>
<h3 id="after-you-have-solved-it">After you have solved it:</h3>
<p>Can you find two other algorithmically different approaches to solve this puzzle? The refrence solutions in JavaScript, C# and Python solve the puzzle in fundamentally different ways.</p>
</div>

<br> <hr> <br>

N-паразитные числа, оканчивающиеся на N
<div class="markdown prose max-w-none mb-8" id="description"><p>Задача состоит в том, чтобы вычислить специальный набор <a href="https://en.wikipedia.org/wiki/Parasitic_number" data-turbolinks="false" target="_blank">паразитных чисел</a> для различных систем счисления.</p>
<blockquote>
<p>N-паразитное число (в десятичной системе счисления) — это положительное натуральное число, которое можно умножить на <code>n</code>, переместив крайнюю правую цифру его десятичного представления в начало. Здесь <code>n</code> само по себе является однозначным положительным натуральным числом. Другими словами, десятичное представление подвергается круговому сдвигу вправо на одну позицию. Например, 4 • 128205 = 512820, поэтому 128205 является 4-паразитным числом.

<h3 id="special-parasitic-numbers">Специальные паразитные числа</h3>
<p>Для некоторого <code>N</code> может существовать несколько N-паразитных чисел. Эта задача посвящена поиску специального набора n-паразитных чисел, где последняя цифра также является <code>N</code> в N-паразитном числе. В десятичной системе счисления приведенный выше отрывок из Википедии показывает, что 128205 является 4-паразитным числом, поскольку 4 • 128205 = 512820; Однако, особое число, которое ищет эта Ката, — это наименьшее 4-паразитическое число, также оканчивающееся на 4, а именно 102564: 4 • 102564 = 410256.</p>
<h4 id="a-clarifying-anti-example">Пояснительный антипример</h4>
<p>Часть требований, оканчивающаяся на N, легко может быть пропущена. Хотя 5 • 142857 = 714285, это число 142857 является паразитным, но оно не является искомым числом в этой ката, потому что оно заканчивается на 7 в разряде единиц, а не на «n» (которое в данном случае равно 5).
<pre><code> v--- ката требует, чтобы эта цифра была 5 для n = 5
5 • 142857 = 714285
^--- ката требует, чтобы эта цифра была 5 для n = 5
</code></pre>
<p>Хотя произведение заканчивается на 5 в разряде единиц, это требование о том, что оно заканчивается на N, относится к множимому, а не к произведению. Искомый ответ намного больше, чем 142857 при n = 5.</p>
<h3 id="challenge">Задание</h3>
<p>Предоставьте метод, принимающий два аргумента: специальную завершающую цифру и основание системы счисления.</p> Ваш метод должен возвращать строковое представление наименьшего целого числа, обладающего особым свойством паразитного числа, как описано выше, в запрошенной системе счисления (восьмеричной, десятичной и шестнадцатеричной). Каждая система счисления будет проверять все конечные цифры, кроме 0 и 1, что в общей сложности даст 28 тестовых случаев.</p>
<h3 id="why-the-smallest">Почему наименьшее?</h3>
<p>Рассмотрим, как особое 4-паразитическое шестнадцатеричное число, оканчивающееся на 4, равно 104.</p>
<p><code>104 Hex • 4 = 410 Hex.</code></p>
<p>Повторив <code>104</code> дважды и умножив на 4, мы получим <code>104104 Hex • 4 = 410410 Hex</code>. Это свойство сохраняется независимо от того, сколько раз повторяется набор цифр (например, <code>104104 Hex • 4 = 410410 Hex, 104104104 Hex • 4 = 410410410 Hex, 104104104104 Hex • 4 = 410410410410 Hex, ...</code>), что в каждом случае приводит к бесконечному набору этих особых чисел. Ваша задача — найти только наименьшее число, удовлетворяющее особому свойству паразитизма (этот факт является подсказкой к одному из возможных способов решения этой задачи).</p>
<h3 id="hints">Подсказки:</h3>
<ul>
<li>Если вы не сможете проявить смекалку, методы перебора, вероятно, не сработают.</li>
<li>Существует ответ, удовлетворяющий критериям для каждой из проверяемых цифр в конце числа.</li>
<li>Нулевые цифры в начале числа не допускаются.</li>
<li>Неудачи при проверке не выявят ожидаемые значения.</li>
</ul>
<h3 id="after-you-have-solved-it">После того, как вы решили задачу:</h3>
<p>Можете ли вы найти два других алгоритмически различных подхода к решению этой головоломки? Эталонные решения на JavaScript, C# и Python решают головоломку принципиально разными способами.</p>
</div>

Ось чудове алгоритмічне завдання. Як і зазначено в підказках ката, метод перебору (brute force) тут не спрацює, оскільки шукані числа можуть бути величезними. 

Замість того, щоб вгадувати число, ми можемо **побудувати його поцифрово справа наліво**, імітуючи процес множення у стовпчик.

### Логіка алгоритму

Ми знаємо, що остання цифра шуканого числа дорівнює нашому множнику $N$. Коли ми множимо число на $N$, результат зсувається на одну позицію вправо, і ця остання цифра $N$ стає першою цифрою. 

Це означає, що ми можемо використовувати поточну цифру для обчислення наступної цифри зліва від неї.
Для кожної ітерації ми застосовуємо такі формули:

$d_{i+1} = (N \cdot d_i + \text{carry}) \pmod b$
$\text{carry} = \lfloor(N \cdot d_i + \text{carry}) / b\rfloor$

Де:
* $N$ — наш множник (і остання цифра `lastDigit`).
* $b$ — основа системи счисления (`base`).
* $d_i$ — поточна цифра.
* $d_{i+1}$ — наступна цифра зліва.
* $\text{carry}$ — залишок (перенесення в наступний розряд).

Процес зупиняється тоді, коли наша наступна розрахована цифра $d_{i+1}$ дорівнює початковому множнику $N$, а перенесення ($\text{carry}$) дорівнює **0**. Це означає, що ми замкнули цикл кругового зсуву.

### Рішення на JavaScript

Оскільки ми зберігаємо кожну цифру в масиві, цей підхід легко обходить обмеження JavaScript на максимальний розмір числа (`Number.MAX_SAFE_INTEGER`), що дозволяє генерувати рядки будь-якої довжини.

```javascript
/**
 * @param {number} lastDigit - The multiplier and the trailing digit (N)
 * @param {number} base - The number base (e.g., 8, 10, 16)
 * @returns {string} - String representation of the smallest n-parasitic number
 */
function calculateSpecial(lastDigit, base) {
  const result = [lastDigit];
  let carry = 0;
  let currentDigit = lastDigit;

  while (true) {
    // Обчислюємо добуток поточної цифри на множник + перенесення з попереднього розряду
    const product = lastDigit * currentDigit + carry;
    
    // Знаходимо наступну цифру та нове значення перенесення
    const nextDigit = product % base;
    carry = Math.floor(product / base);

    // Якщо наступна цифра дорівнює початковій і немає залишку - ми знайшли найменше число
    if (nextDigit === lastDigit && carry === 0) {
      break;
    }

    result.push(nextDigit);
    currentDigit = nextDigit;
  }

  // Оскільки ми збирали число з кінця, перевертаємо масив 
  // і конвертуємо кожну цифру у відповідну систему счисления
  return result
    .reverse()
    .map((digit) => digit.toString(base))
    .join('');
}

module.exports = calculateSpecial;
```

### Як це працює на прикладі (база 10, N = 4):

1. **Старт:** `result = [4]`, `carry = 0`, `current = 4`
2. **Крок 1:** $4 \cdot 4 + 0 = 16$. Наступна цифра: $6$, перенесення: $1$. `result = [4, 6]`
3. **Крок 2:** $4 \cdot 6 + 1 = 25$. Наступна цифра: $5$, перенесення: $2$. `result = [4, 6, 5]`
4. **Крок 3:** $4 \cdot 5 + 2 = 22$. Наступна цифра: $2$, перенесення: $2$. `result = [4, 6, 5, 2]`
5. **Крок 4:** $4 \cdot 2 + 2 = 10$. Наступна цифра: $0$, перенесення: $1$. `result = [4, 6, 5, 2, 0]`
6. **Крок 5:** $4 \cdot 0 + 1 = 1$. Наступна цифра: $1$, перенесення: $0$. `result = [4, 6, 5, 2, 0, 1]`
7. **Крок 6:** $4 \cdot 1 + 0 = 4$. Наступна цифра: $4$, перенесення: $0$. Збігається з $N$ і `carry` дорівнює 0! Зупиняємось.
8. **Фінал:** Перевертаємо масив і отримуємо `"102564"`.

Ця задача просить вас знайти особливе **паразитне число** для заданої системи числення та множника. Ось детальне пояснення того, що це означає і як працює логіка.

---

### Що таке N-паразитне число?
Згідно з описом, це число, яке при множенні на одноцифрове число $n$ дає результат, що виглядає як оригінальне число, в якому останню цифру перенесли на початок. 

Це називається **правим циклічним зсувом** на одну позицію.

**Приклад (десяткова система):**
Уявіть число `128205`. Помножимо його на `4`:
$$4 \times 128205 = 512820$$
Як бачимо, остання цифра `5` "перестрибнула" наперед, а решта цифр просто посунулися вправо.



---

### Спеціальна умова: "Ending in N"
У цій ката є додаткова вимога: число, яке ви шукаєте, має закінчуватися на ту саму цифру, на яку ви його множите ($N$).

* **Приклад для N = 4:** Ви шукаєте найменше число, яке закінчується на `4`, і при множенні на `4` дає результат, де ця `4` стоїть першою.
* **Чому 128205 не підходить для N = 4?** Хоча воно 4-паразитне, воно закінчується на `5`, а не на `4`.
* **Правильна відповідь для N = 4 (Base 10):** Це `102564`.
    * $4 \times 102564 = 410256$.
    * Воно закінчується на `4`.
    * Його множник — `4`.
    * Результат — циклічний зсув цієї `4` наперед.

---

### Чому не можна використовувати "перебір" (Brute Force)?
Опис попереджає, що звичайний перебір чисел ($1, 2, 3 \dots$) не спрацює. Це тому, що:
1.  **Розмір чисел:** Ці числа можуть бути надзвичайно довгими (десятками знаків), що виходить за межі можливостей стандартних числових типів даних (як `Number` у JavaScript).
2.  **Час:** Перевірка кожного числа займе мільярди років.

---

### Як підійти до вирішення? (Математична логіка)
Найкращий спосіб — це **симулювати множення "у стовпчик"** справа наліво.

Оскільки ми знаємо останню цифру (це $N$) і множник ($N$), ми можемо обчислити передостанню цифру:
1.  Множимо $N$ на $N$.
2.  Остання цифра результату стане передостанньою цифрою нашого числа.
3.  Запам'ятовуємо залишок (carry).
4.  Повторюємо процес із новою цифрою, поки не отримаємо початкове $N$ і нульовий залишок.

---

### Основні вимоги до результату:
* **Найменше число:** Якщо ви знайшли послідовність цифр, яка задовольняє умову, не потрібно її повторювати (наприклад, для 16-ткової системи `104` — це відповідь, не треба виводити `104104`).
* **Системи числення:** Ваша функція має працювати для 8-ї, 10-ї та 16-ї систем числення.
* **Формат:** Результат має бути рядком (`string`), оскільки числа занадто великі для `BigInt` або `Number` у деяких тестах.
* **Без провідних нулів:** Число не може починатися з `0`.

Чи потрібно вам розібрати конкретний приклад обчислення в шістнадцятковій системі числення?