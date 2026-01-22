<div class="markdown prose max-w-none mb-8" id="description"><p>You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:</p>
<pre style="display: none;"><code class="language-ruby"><span class="cm-keyword">class</span> <span class="cm-tag">Student</span>
  <span class="cm-variable">attr_reader</span> <span class="cm-atom">:name</span>
  <span class="cm-variable">attr_reader</span> <span class="cm-atom">:fives</span>
  <span class="cm-variable">attr_reader</span> <span class="cm-atom">:tens</span>
  <span class="cm-variable">attr_reader</span> <span class="cm-atom">:twenties</span>
  
  <span class="cm-keyword">def</span> <span class="cm-def">initialize</span>(<span class="cm-variable">name</span>, <span class="cm-variable">fives</span>, <span class="cm-variable">tens</span>, <span class="cm-variable">twenties</span>)
    <span class="cm-variable-2">@name</span> <span class="cm-operator">=</span> <span class="cm-variable">name</span>
    <span class="cm-variable-2">@fives</span> <span class="cm-operator">=</span> <span class="cm-variable">fives</span>
    <span class="cm-variable-2">@tens</span> <span class="cm-operator">=</span> <span class="cm-variable">tens</span>
    <span class="cm-variable-2">@twenties</span> <span class="cm-operator">=</span> <span class="cm-variable">twenties</span>
  <span class="cm-keyword">end</span>
<span class="cm-keyword">end</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-keyword">class</span> <span class="cm-def">Student</span>:
    <span class="cm-keyword">def</span> <span class="cm-def">__init__</span>(<span class="cm-variable-2">self</span>, <span class="cm-variable">name</span>, <span class="cm-variable">fives</span>, <span class="cm-variable">tens</span>, <span class="cm-variable">twenties</span>):
        <span class="cm-variable-2">self</span>.<span class="cm-property">name</span> <span class="cm-operator">=</span> <span class="cm-variable">name</span>
        <span class="cm-variable-2">self</span>.<span class="cm-property">fives</span> <span class="cm-operator">=</span> <span class="cm-variable">fives</span>
        <span class="cm-variable-2">self</span>.<span class="cm-property">tens</span> <span class="cm-operator">=</span> <span class="cm-variable">tens</span>
        <span class="cm-variable-2">self</span>.<span class="cm-property">twenties</span> <span class="cm-operator">=</span> <span class="cm-variable">twenties</span>
</code></pre>
<pre style="display: none;"><code class="language-c"><span class="cm-meta">#define NAMELIM     0x8</span>

<span class="cm-keyword">struct</span> <span class="cm-def">student</span> {
    <span class="cm-type">char</span> <span class="cm-variable">name</span>[<span class="cm-variable">NAMELIM</span> <span class="cm-operator">+</span> <span class="cm-number">1</span>];
    <span class="cm-type">unsigned</span> <span class="cm-variable">fives</span>;
    <span class="cm-type">unsigned</span> <span class="cm-variable">tens</span>;
    <span class="cm-type">unsigned</span> <span class="cm-variable">twenties</span>;
};
</code></pre>
<pre style="display: none;"><code class="language-nasm">struc student
    .name:      <span class="cm-tag">resb</span> <span class="cm-number">9</span>
                alignb <span class="cm-number">4</span>
    .fives:     <span class="cm-tag">resd</span> <span class="cm-number">1</span>
    .tens:      <span class="cm-tag">resd</span> <span class="cm-number">1</span>
    .twenties:  <span class="cm-tag">resd</span> <span class="cm-number">1</span>
endstruc

student_sz      <span class="cm-keyword">equ</span> <span class="cm-number">0</span>h18
</code></pre>
<pre><code class="language-javascript"><span class="cm-keyword">class</span> <span class="cm-def">Student</span> {
  <span class="cm-property">constructor</span>(<span class="cm-def">name</span>, <span class="cm-def">fives</span>, <span class="cm-def">tens</span>, <span class="cm-def">twenties</span>) {
    <span class="cm-keyword">this</span>.<span class="cm-property">name</span> <span class="cm-operator">=</span> <span class="cm-variable-2">name</span>;
    <span class="cm-keyword">this</span>.<span class="cm-property">fives</span> <span class="cm-operator">=</span> <span class="cm-variable-2">fives</span>;
    <span class="cm-keyword">this</span>.<span class="cm-property">tens</span> <span class="cm-operator">=</span> <span class="cm-variable-2">tens</span>;
    <span class="cm-keyword">this</span>.<span class="cm-property">twenties</span> <span class="cm-operator">=</span> <span class="cm-variable-2">twenties</span>;
  }
}
</code></pre>
<pre style="display: none;"><code class="language-scala"><span class="cm-keyword">case</span> <span class="cm-keyword">class</span> <span class="cm-def">Student</span>(<span class="cm-variable">name</span>: <span class="cm-type">String</span>, <span class="cm-variable">fives</span>: <span class="cm-type">Int</span>, <span class="cm-variable">tens</span>: <span class="cm-type">Int</span>, <span class="cm-variable">twenties</span>: <span class="cm-type">Int</span>)
</code></pre>
<p>As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return <code>"all"</code>.</p>
<p>Notes:</p>
<ul>
<li>Each student will have a unique name</li>
<li>There will always be a clear winner: either one person has the most, or everyone has the same amount</li>
<li>If there is only one student, then that student has the most money</li>
</ul>
</div>

<br><hr><br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Вы отправляетесь в путешествие со студентами, и вам предстоит следить за тем, сколько денег у каждого студента. Студент определяется следующим образом:</p>
<pre style="display: none;"><code class="language-ruby"><span class="cm-keyword">класс</span> <span class="cm-tag">Студент</span>

<span class="cm-variable">attr_reader</span> <span class="cm-atom">:имя</span>

<span class="cm-variable">attr_reader</span> <span class="cm-atom">:пятерых</span>

<span class="cm-variable">attr_reader</span> <span class="cm-atom">:десяти</span>

<span class="cm-variable">attr_reader</span> <span class="cm-atom">:двадцатилетия</span>

<span class="cm-keyword">def</span> <span class="cm-def">initialize</span>(<span class="cm-variable">name</span>, <span class="cm-variable">fives</span>, <span class="cm-variable">tens</span>, <span class="cm-variable">twenties</span>)
<span class="cm-variable-2">@name</span> <span class="cm-operator">=</span> <span class="cm-variable">name</span>
<span class="cm-variable-2">@fives</span> <span class="cm-operator">=</span> <span class="cm-variable">fives</span>
<span class="cm-variable-2">@twenties</span> <span class="cm-operator">=</span> <span class="cm-variable">twenties</span>
<span class="cm-keyword">end</span>
<span class="cm-keyword">end</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-keyword">class</span> <span class="cm-def">Student</span>:
<span class="cm-keyword">def</span> <span class="cm-def">__init__</span>(<span class="cm-variable-2">self</span>, <span class="cm-variable">name</span>, <span class="cm-variable">fives</span>, <span class="cm-variable">tens</span>, <span class="cm-variable">двадцатые</span>):
<span class="cm-variable-2">сам</span>.<span class="cm-property">имя</span> <span class="cm-operator">=</span> <span class="cm-variable">имя</span>
<span class="cm-variable-2">сам</span>.<span class="cm-property">пятерки</span> <span class="cm-operator">=</span> <span class="cm-variable">пятерки</span>
<span class="cm-variable-2">сам</span>.<span class="cm-property">twenties</span> <span class="cm-operator">=</span> <span class="cm-variable">twenties</span>
</code></pre>
<pre style="display: none;"><code class="language-c"><span class="cm-meta">#define NAMELIM 0x8</span>

<span class="cm-keyword">struct</span> <span class="cm-def">student</span> {

<span class="cm-type">char</span> <span class="cm-variable">name</span>[<span class="cm-variable">NAMELIM</span> <span class="cm-operator">+</span> <span class="cm-number">1</span>];

<span class="cm-type">unsigned</span> <span class="cm-variable">fives</span>;

<span class="cm-type">unsigned</span> <span class="cm-variable">tens</span>;

<span class="cm-type">unsigned</span> <span class="cm-variable">twenties</span>;

};

</code></pre>
<pre style="display: none;"><code class="language-nasm">struc student

.name: <span class="cm-tag">resb</span> <span class="cm-number">9</span>
alignb <span class="cm-number">4</span>
.fives: <span class="cm-tag">resd</span> <span class="cm-number">1</span>
.tens: <span class="cm-tag">resd</span> <span class="cm-number">1</span>
.twenties: <span class="cm-tag">resd</span> <span class="cm-number">1</span>
endstruc

student_sz <span class="cm-keyword">equ</span> <span class="cm-number">0</span>h18
</code></pre>
<pre><code class="language-javascript"><span class="cm-keyword">class</span> <span class="cm-def">Student</span> {
<span class="cm-property">constructor</span>(<span class="cm-def">name</span>, <span class="cm-def">fives</span>, <span class="cm-def">tens</span>, <span class="cm-def">twenties</span>) {
<span class="cm-keyword">this</span>.<span class="cm-property">name</span> <span class="cm-operator">=</span> <span class="cm-variable-2">name</span>;
<span class="cm-keyword">это</span>.<span class="cm-property">пять</span> <span class="cm-operator">=</span> <span class="cm-variable-2">пять</span>;
<span class="cm-keyword">это</span>.<span class="cm-property">десять</span> <span class="cm-operator">=</span> <span class="cm-variable-2">десять</span>;


}
}
</code></pre>
<pre style="display: none;"><code class="language-scala"><span class="cm-keyword">case</span> <span class="cm-keyword">class</span> <span class="cm-def">Student</span>(<span class="cm-variable">name</span>: <span class="cm-type">String</span>, <span class="cm-variable">fives</span>: <670
span class="cm-type">Int</span>, <span class="cm-variable">tens</span>: <span class="cm-type">Int</span>, <span class="cm-variable">twenties</span>: <span class="cm-type">Int</span>)
</code></pre>
<p>Как вы можете заметить, у каждого студента есть несколько пятерок, десятков и двадцаток. Ваша задача — вернуть имя студента с наибольшим количеством денег. Если у всех студентов одинаковая сумма, то верните <code>"all"</code>.</p>
<p>Примечания:</p>
<ul>
<li>У каждого студента будет уникальное имя</li>
<li>Всегда будет явный победитель: либо у одного человека больше всего денег, либо у всех одинаковая сумма</li>
<li>Если есть только один студент, то у этого студента больше всего денег</li>
</ul>
</div>

### Огляд функції

Наша мета — повернути **ім’я студента з найбільшою сумою грошей**, де кожен студент має кількість купюр по 5, 10 і 20. Якщо **всі** студенти мають однакову суму — повернути **"all"**. Якщо в масиві лише один студент — повернути його ім’я.

---

### Повний код функції

```javascript
function mostMoney(students) {
  if (!students || students.length === 0) return "all";
  if (students.length === 1) return students[0].name;

  const totals = students.map(s => s.fives * 5 + s.tens * 10 + s.twenties * 20);

  const uniqueTotals = new Set(totals);
  if (uniqueTotals.size === 1) return "all";

  let maxIndex = 0;
  for (let i = 1; i < totals.length; i++) {
    if (totals[i] > totals[maxIndex]) maxIndex = i;
  }

  return students[maxIndex].name;
}

module.exports = mostMoney;
```

---

### Покроковий розбір

- **Перевірка вхідних даних**  
  - `if (!students || students.length === 0) return "all";`  
    Повертаємо `"all"` для порожнього або невизначеного масиву (залежить від вимог тестів — тут обрана безпечна поведінка).
  - `if (students.length === 1) return students[0].name;`  
    Обробляємо випадок одного студента окремо, щоб не помилково вважати його рівним іншим.

- **Обчислення сум для кожного студента**  
  - `students.map(s => s.fives * 5 + s.tens * 10 + s.twenties * 20)`  
    Для кожного студента обчислюємо загальну суму в гривнях/доларах тощо, множачи кількість купюр на їх номінал.

- **Перевірка чи всі суми однакові**  
  - `new Set(totals)` видаляє дублікати; якщо розмір множини `1`, то всі значення однакові → повертаємо `"all"`.

- **Пошук індексу максимального значення**  
  - Проходимо масив `totals` і зберігаємо індекс найбільшого значення у `maxIndex`. Повертаємо `students[maxIndex].name`.

---

### Обробка крайніх випадків

- **Один студент** — повертаємо його ім’я (виправляє помилку, яку ви бачили).
- **Порожній масив** — у коді повертається `"all"`. Якщо специфікація вимагає іншої поведінки, можна кинути помилку або повернути `null`.
- **Нульові значення полів** — працює коректно (сума буде 0).
- **Великі числа** — множення і додавання працюють в межах JS Number; при екстремально великих кількостях може бути втрата точності, але для реальних задач це неактуально.

---

### Складність і оптимізація

- **Часова складність:** \(\;O(n)\) — прохід по масиву один раз для `map`, ще один раз для пошуку максимуму; можна зробити в один прохід, зменшивши константу.
- **Пам’ять:** поточна реалізація використовує додатковий масив `totals` → пам’ять \(O(n)\). Можна зменшити до \(O(1)\), обчислюючи суму на льоту і відстежуючи максимум та прапорець рівності.

#### Варіант з одним проходом і O(1) пам’яттю

```javascript
function mostMoney(students) {
  if (!students || students.length === 0) return "all";
  if (students.length === 1) return students[0].name;

  let maxSum = -Infinity;
  let maxName = null;
  let allEqual = true;
  let firstSum = null;

  for (const s of students) {
    const sum = s.fives * 5 + s.tens * 10 + s.twenties * 20;
    if (firstSum === null) firstSum = sum;
    if (sum !== firstSum) allEqual = false;

    if (sum > maxSum) {
      maxSum = sum;
      maxName = s.name;
    }
  }

  return allEqual ? "all" : maxName;
}
```

---

### Чому раніше тест падав і як це виправлено

- Помилка: при масиві з одного студента множина `uniqueTotals` мала розмір `1`, і функція повертала `"all"`.  
- Виправлення: додано явну перевірку `students.length === 1` перед перевіркою на однаковість сум.

---

### Відповідність тестам

- **Тести з прикладу**: тепер випадки з одним студентом повертають його ім’я; випадки, де всі мають однакову суму, повертають `"all"`; випадки з явним переможцем повертають його ім’я.

---

Якщо хочеш, можу:  
- показати версію з TypeScript-типами;  
- додати юніт-тести для додаткових крайніх випадків;  
- або переробити поведінку для порожнього масиву відповідно до твоїх вимог.
